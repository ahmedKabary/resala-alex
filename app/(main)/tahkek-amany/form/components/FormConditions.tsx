"use client";

import Link from 'next/link'

export function FormConditions() {
  return (
    <div className="mt-12 rounded-3xl bg-white/75 border border-slate-200/70 p-6 sm:p-8 shadow-sm">
      <div className="text-lg font-semibold text-slate-900">شروط تحقيق الأمنية</div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
          <div className="text-sm font-medium text-slate-900">وضوح التفاصيل</div>
          <div className="mt-1 text-sm text-slate-600 leading-relaxed">
            اكتب الأمنية بوضوح مع ذكر الاحتياج الأساسي، الموقع، وأي تفاصيل تساعد فريقنا.
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
          <div className="text-sm font-medium text-slate-900">لمزيد من المعلومات</div>
          <div className="mt-1 text-sm text-slate-600 leading-relaxed">
            يمكن الاطلاع على تفاصيل المبادرة عبر{' '}
            <Link href="/about" className="text-sky-700 hover:underline">
              صفحة عن المبادرة
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
