"use client";

import { LoadingImage } from '@/components/desktop/LoadingImage'
import { Heart } from 'lucide-react'

export function TahkekImage() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-amber-200/40 to-rose-200/40 blur-3xl" />
      <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white shadow-2xl bg-white/50 p-8 flex items-center justify-center">
        <LoadingImage
          src="/amany.png"
          alt="تحقيق الأماني"
          fill
          className="object-contain p-12"
        />
      </div>
      
      {/* Floating Card */}
      <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-xl border border-slate-100 max-w-[200px] hidden sm:block animate-bounce-slow">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="size-4 text-rose-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-500 uppercase">فريق تحقيق الأماني</span>
        </div>
        <p className="text-sm font-medium text-slate-900">قوافل خارجي إسكندرية</p>
        <div className="mt-2 text-[10px] text-emerald-600 font-bold">نعمل على تحقيق الأماني ✓</div>
      </div>
    </div>
  );
}
