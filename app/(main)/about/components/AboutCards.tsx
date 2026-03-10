'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AboutCards() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      <Card className="bg-white/70 border-slate-200/70 shadow-sm">
        <CardHeader>
          <CardTitle className="text-slate-900">رؤيتنا</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600 leading-relaxed">
          أن نكون الجسر الذي يربط بين فاعلي الخير والمستحقين في كل شبر من إسكندرية، مع التركيز على إدخال السرور من خلال تحقيق الأماني.
        </CardContent>
      </Card>

      <Card className="bg-white/70 border-slate-200/70">
        <CardHeader>
          <CardTitle className="text-slate-900">لمن هذه المبادرة؟</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600 leading-relaxed">
          لأي شخص يريد مشاركة أمنية أو حلم بشكل واضح.
        </CardContent>
      </Card>
    </div>
  );
}
