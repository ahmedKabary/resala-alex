'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, addDoc, serverTimestamp, Timestamp, getDocs, query, where, orderBy, limit } from 'firebase/firestore';

import { PageShell } from '@/components/desktop/PageShell';
import { db } from '@/lib/firebase';

import { FormCard } from './components/FormCard';
import { FormAside } from './components/FormAside';
import { FormConditions } from './components/FormConditions';

interface FormData {
  name: string;
  phone: string;
  wish: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  wish?: string;
}

export default function FormPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    wish: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<'none' | 'processing' | 'completed' | 'declined' | 'pending'>('none');

  useEffect(() => {
    const loadLatestWish = async () => {
      try {
        const snap = await getDocs(
          query(
            collection(db, 'wishes'),
            orderBy('createdAt', 'desc'),
            limit(1)
          )
        );
        if (snap.empty) {
          setCurrentStatus('none');
          return;
        }
        const status = (snap.docs[0].data().status || '').toLowerCase();
        if (status === 'completed') setCurrentStatus('completed');
        else if (status === 'declined') setCurrentStatus('declined');
        else if (status === 'processing') setCurrentStatus('processing');
        else if (status === 'pending' || status === '') setCurrentStatus('pending');
        else setCurrentStatus('pending');
      } catch (err) {
        console.error('load latest wish error', err);
      }
    };
    loadLatestWish();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'يرجى إدخال اسمك';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'يرجى إدخال رقم هاتفك';
    } else if (!/^[0-9\s\-\+\(\)]{8,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'يرجى إدخال رقم هاتف صحيح';
    }

    if (!formData.wish.trim()) {
      newErrors.wish = 'يرجى إدخال أمنيتك';
    } else if (formData.wish.trim().length < 5) {
      newErrors.wish = 'يجب أن تكون الأمنية أطول من 5 أحرف';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    try {
      // تحقق من القيود: أمنية واحدة فقط إلا إذا كانت مرفوضة، ولا تقديم بعد أمنية مقبولة
      const existingSnap = await getDocs(
        query(collection(db, 'wishes'))
      );

      const wishes = existingSnap.docs.map((d) => d.data() as { status?: string });
      const hasGranted = wishes.some((w) => (w.status || '').toLowerCase() === 'completed');
      const hasActive = wishes.some((w) => {
        const s = (w.status || '').toLowerCase();
        return s === '' || s === 'processing' || s === 'pending' || (!s && true);
      });

      if (hasGranted) {
        setErrors({
          wish: 'تم تحقيق أمنيتك بالفعل، لا يمكن إرسال أمنية جديدة.',
        });
        return;
      }

      if (hasActive) {
        setErrors({
          wish: 'لا يمكنك إرسال أمنية جديدة حالياً. يوجد طلب قيد المراجعة أو المعالجة.',
        });
        return;
      }

      // Rate limit: max 5 submissions per hour
      const oneHourAgo = Timestamp.fromDate(new Date(Date.now() - 60 * 60 * 1000));
      const recentSubmissions = await getDocs(
        query(
          collection(db, 'wishes'),
          where('createdAt', '>=', oneHourAgo)
        )
      );

      if (recentSubmissions.size >= 5) {
        setErrors({
          wish: 'تم الوصول للحد الأقصى للطلبات لهذه الساعة (5). حاول لاحقاً.',
        });
        return;
      }

      await addDoc(collection(db, 'wishes'), {
        ...formData,
        status: 'unreaded',
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      // Immediately reflect that there is now an active wish so the form locks
      setCurrentStatus('pending');
      setFormData({ name: '', phone: '', wish: '' });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ wish: 'حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
          <div>
            <FormCard
              formData={formData}
              errors={errors}
              submitting={submitting}
              success={success}
              currentStatus={currentStatus}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </div>
          <FormAside />
        </div>
        <FormConditions />
      </div>
    </PageShell>
  );
}
