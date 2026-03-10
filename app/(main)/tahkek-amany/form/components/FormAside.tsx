"use client";

import { LoadingImage } from '@/components/desktop/LoadingImage'

export function FormAside() {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rounded-3xl bg-white/70 border border-slate-200/70 p-6 shadow-sm">
        <div className="text-sm font-semibold text-slate-900">
          تنبيه
        </div>
        <div className="mt-2 text-sm text-slate-600 leading-relaxed">
          لكل مستخدم أمنية واحدة فقط
        </div>

        <div className="mt-6 relative aspect-square w-full">
          <LoadingImage
            src="/genie.png"
            alt="genie"
            fill
            sizes="(max-width: 1024px) 80vw, 360px"
            className="object-contain"
          />
        </div>
      </div>
    </aside>
  );
}
