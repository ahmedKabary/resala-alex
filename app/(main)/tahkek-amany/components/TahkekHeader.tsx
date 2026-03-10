"use client";

import { Sparkles } from 'lucide-react'

export function TahkekHeader() {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-sm font-medium">
        <Sparkles className="size-4" />
        <span>قسم تحقيق الأماني</span>
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
        اجعل العالم <span className="text-amber-600">أجمل</span> <br /> بأمنية بسيطة
      </h1>
      <p className="text-lg text-slate-600 leading-relaxed">
        في قوافل خارجي إسكندرية، نؤمن أن لكل إنسان حق في الفرح. 
        هدفنا هو الوصول للأشخاص الذين لديهم أمنيات بسيطة ولكنها تعني لهم الكثير، 
        ونسعى بكل طاقتنا لتحقيقها.
      </p>
    </div>
  );
}
