'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function PrivacyCards() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      <Card className="bg-white/70 border-slate-200/70">
        <CardHeader>
          <CardTitle className="text-slate-900">ما الذي نجمعه؟</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600 leading-relaxed">
          بيانات تسجيل الدخول (مثل البريد الإلكتروني) وبيانات النموذج
          (الاسم/الهاتف/الأمنية) لغرض التواصل ومراجعة الطلب.
        </CardContent>
      </Card>

      <Card className="bg-white/70 border-slate-200/70">
        <CardHeader>
          <CardTitle className="text-slate-900">كيف نستخدمه؟</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600 leading-relaxed">
          لتأكيد هوية المستخدم، تقليل الرسائل العشوائية، وتمكين الفريق من
          متابعة الحالات والتواصل عند الحاجة.
        </CardContent>
      </Card>

      <Card className="bg-white/70 border-slate-200/70">
        <CardHeader>
          <CardTitle className="text-slate-900">من يمكنه الاطلاع؟</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600 leading-relaxed">
          فقط الفريق المصرّح له داخل المشروع. لا يتم نشر بياناتك للعامة.
        </CardContent>
      </Card>

      <Card className="bg-white/70 border-slate-200/70">
        <CardHeader>
          <CardTitle className="text-slate-900">عدد الأمنيات</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600 leading-relaxed">
          يمكن لكل مستخدم إرسال أمنية واحدة فقط.
        </CardContent>
      </Card>
    </div>
  );
}
