"use client";

import React from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface VolunteerFormProps {
  name: string
  setName: (value: string) => void
  phone: string
  setPhone: (value: string) => void
  submitted: boolean
  submitting: boolean
  errors: { name?: string; phone?: string }
  setErrors: (errors: { name?: string; phone?: string }) => void
  submitError: string | null
  setSubmitError: (error: string | null) => void
  handleSubmit: (e: React.FormEvent) => void
}

export function VolunteerForm({
  name,
  setName,
  phone,
  setPhone,
  submitted,
  submitting,
  errors,
  setErrors,
  submitError,
  setSubmitError,
  handleSubmit,
}: VolunteerFormProps) {
  const router = useRouter()

  return (
    <Card className="bg-white/85 border-slate-200/70 shadow-xl backdrop-blur">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="space-y-1 text-right">
          <CardTitle className="text-2xl text-slate-900">استمارة التطوع</CardTitle>
          <div className="text-sm text-slate-600">
            اترك بياناتك لنتواصل معك للانضمام إلى فرق التطوع والقوافل الخارجية.
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit} id="form">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">الاسم الكامل</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="اكتب اسمك هنا"
                className={errors.name ? 'border-rose-300 focus-visible:ring-rose-200' : undefined}
              />
              {errors.name ? (
                <div className="text-rose-700 text-xs sm:text-sm">{errors.name}</div>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="ادخل رقم الهاتف"
                className={errors.phone ? 'border-rose-300 focus-visible:ring-rose-200' : undefined}
              />
              {errors.phone ? (
                <div className="text-rose-700 text-xs sm:text-sm">{errors.phone}</div>
              ) : null}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button type="submit" className="rounded-full" disabled={submitting}>
              {submitting ? 'جاري الإرسال...' : 'أرسل بياناتي'}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="rounded-full"
              onClick={() => router.push('/')}
            >
              العودة للرئيسية
            </Button>
          </div>

          {submitError ? (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
              {submitError}
            </div>
          ) : null}

          {submitted ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              تم استلام بياناتك وسنتواصل معك قريباً. شكراً لتطوعك!
            </div>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
}
