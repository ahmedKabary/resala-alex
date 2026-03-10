"use client";

import React from "react"
import Link from 'next/link'

import { Send } from 'lucide-react';

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

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

interface FormCardProps {
  formData: FormData;
  errors: FormErrors;
  submitting: boolean;
  success: boolean;
  currentStatus: 'none' | 'processing' | 'completed' | 'declined' | 'pending';
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export function FormCard({
  formData,
  errors,
  submitting,
  success,
  currentStatus,
  handleInputChange,
  handleSubmit,
}: FormCardProps) {
  return (
    <Card className="mt-6 bg-white/75 border-slate-200/70 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-slate-900">
          أرسل أمنيتك
        </CardTitle>
        <div className="text-sm text-slate-600">
          اكتب بياناتك وأمنيتك بشكل واضح لمساعدتنا على التواصل معك.
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-900">
              الاسم الكامل
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={currentStatus === 'processing' || currentStatus === 'pending' || currentStatus === 'completed'}
              placeholder="أدخل اسمك الكامل"
              className={
                errors.name
                  ? 'border-rose-300 focus-visible:ring-rose-200'
                  : cn(
                      'border-slate-200 focus-visible:ring-sky-200',
                      currentStatus === 'processing' || currentStatus === 'pending' || currentStatus === 'completed'
                        ? 'bg-slate-100 text-slate-500'
                        : ''
                    )
              }
            />
            {errors.name && (
              <div className="text-rose-700 text-xs sm:text-sm">
                ⚠️ {errors.name}
              </div>
            )}
          </div>

          {/* Phone field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-slate-900">
              رقم الهاتف
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              disabled={currentStatus === 'processing' || currentStatus === 'pending' || currentStatus === 'completed'}
              placeholder="ادخل رقم الهاتف"
              className={
                errors.phone
                  ? 'border-rose-300 focus-visible:ring-rose-200'
                  : cn(
                      'border-slate-200 focus-visible:ring-sky-200',
                      currentStatus === 'processing' || currentStatus === 'pending' || currentStatus === 'completed'
                        ? 'bg-slate-100 text-slate-500'
                        : ''
                    )
              }
            />
            {errors.phone && (
              <div className="text-rose-700 text-xs sm:text-sm">
                ⚠️ {errors.phone}
              </div>
            )}
          </div>

          {/* Wish field */}
          <div className="space-y-2">
            <Label htmlFor="wish" className="text-slate-900">
              أمنيتك
            </Label>
            <Textarea
              id="wish"
              name="wish"
              value={formData.wish}
              onChange={handleInputChange}
              disabled={currentStatus === 'processing' || currentStatus === 'pending' || currentStatus === 'completed'}
              placeholder="أخبرنا عن أمنيتك وحلمك..."
              rows={6}
              className={
                errors.wish
                  ? 'border-rose-300 focus-visible:ring-rose-200'
                  : cn(
                      'border-slate-200 focus-visible:ring-sky-200',
                      currentStatus === 'processing' || currentStatus === 'pending' || currentStatus === 'completed'
                        ? 'bg-slate-100 text-slate-500'
                        : ''
                    )
              }
            />
            {errors.wish && (
              <div className="text-rose-700 text-xs sm:text-sm">
                ⚠️ {errors.wish}
              </div>
            )}
            <div className="text-xs text-slate-500">
              {formData.wish.length} / 500 أحرف
            </div>
          </div>

          <Button
            type="submit"
            disabled={submitting || currentStatus === 'processing' || currentStatus === 'pending' || currentStatus === 'completed'}
            size="lg"
            className={cn(
              'w-full rounded-2xl transition-all',
              currentStatus === 'processing' || currentStatus === 'pending'
                ? 'bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-50'
                : currentStatus === 'completed'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-50'
                : 'bg-primary text-primary-foreground'
            )}
          >
            {submitting ? (
              <>
                <span className="inline-block size-4 rounded-full border-2 border-white/70 border-t-transparent animate-spin" />
                <span>جاري الإرسال...</span>
              </>
            ) : currentStatus === 'processing' || currentStatus === 'pending' ? (
              <>
                <Send className="size-4" />
                <span>طلبك قيد المراجعة</span>
              </>
            ) : currentStatus === 'completed' ? (
              <>
                <Send className="size-4" />
                <span>تم تحقيق أمنيتك</span>
              </>
            ) : currentStatus === 'declined' ? (
              <>
                <Send className="size-4" />
                <span>إرسال أمنية جديدة</span>
              </>
            ) : (
              <>
                <Send className="size-4" />
                <span>إرسال أمنيتي</span>
              </>
            )}
          </Button>

          {success && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 shadow-xs">
              ✅ تم استلام أمنيتك بنجاح. سنراجعها ونتواصل معك قريباً.
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
