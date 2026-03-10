'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

import { PageShell } from '@/components/desktop/PageShell'
import { db } from '@/lib/firebase'

import { VolunteerHeader } from './components/VolunteerHeader'
import { VolunteerForm } from './components/VolunteerForm'

export default function VolunteerPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    const nextErrors: typeof errors = {}
    if (!name.trim()) nextErrors.name = 'يرجى إدخال الاسم'
    if (!phone.trim()) nextErrors.phone = 'يرجى إدخال رقم الهاتف'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setSubmitting(true)
    try {
      await addDoc(collection(db, 'volunteers'), {
        name: name.trim(),
        phone: phone.trim(),
        createdAt: serverTimestamp(),
      })

      setSubmitted(true)
      setName('')
      setPhone('')
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      console.error('Error submitting volunteer form:', err)
      setSubmitError('حدث خطأ أثناء إرسال البيانات. يرجى المحاولة مرة أخرى.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
        <VolunteerHeader />
        <VolunteerForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          submitted={submitted}
          submitting={submitting}
          errors={errors}
          setErrors={setErrors}
          submitError={submitError}
          setSubmitError={setSubmitError}
          handleSubmit={handleSubmit}
        />
      </div>
    </PageShell>
  );
}
