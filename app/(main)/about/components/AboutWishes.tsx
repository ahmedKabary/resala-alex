'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AboutWishes() {
  return (
    <div className="mt-10">
      <Card className="bg-white/70 border-slate-200/70">
        <CardHeader>
          <CardTitle className="text-slate-900">أمنيات يمكن تحقيقها</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
            <div className="rounded-xl border border-slate-200/70 bg-white/70 px-4 py-3">
              الأمنيات المعنوية والدعم المعنوي
            </div>
            <div className="rounded-xl border border-slate-200/70 bg-white/70 px-4 py-3">
              الصحبة والرفقة الطيبة
            </div>
            <div className="rounded-xl border border-slate-200/70 bg-white/70 px-4 py-3">
              توفير كتب مناسبة للقراءة أو التعلم
            </div>
            <div className="rounded-xl border border-slate-200/70 bg-white/70 px-4 py-3">
              تعلم حِرفة أو مهارة عملية
            </div>
            <div className="rounded-xl border border-slate-200/70 bg-white/70 px-4 py-3">
              تعلم البرمجة والمهارات الرقمية
            </div>
            <div className="rounded-xl border border-slate-200/70 bg-white/70 px-4 py-3">
              المساعدة في الاحتياجات اليومية أو الطارئة
            </div>
            <div className="rounded-xl border border-slate-200/70 bg-white/70 px-4 py-3 sm:col-span-2">
              إتاحة فرص عمل أو تدريب مهني عند الإمكان
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
