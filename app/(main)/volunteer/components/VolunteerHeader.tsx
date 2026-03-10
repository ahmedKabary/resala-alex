"use client";

import { LoadingImage } from '@/components/desktop/LoadingImage'

export function VolunteerHeader() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
      <div className="space-y-3 text-right">
        <p className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-semibold text-sky-700">
          رسالة قوافل خارجي إسكندرية
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
          كن جزءاً من عائلة المتطوعين
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          تطوعك معنا يعني وصول المساعدات لمستحقيها، انضم إلينا في رحلتنا لنشر الخير في كل مكان.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-white/50 bg-slate-100">
          <LoadingImage
            src="/volunteer1.png"
            alt="فريق المتطوعين 1"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-white/50 bg-slate-100">
          <LoadingImage
            src="/volunteer2.png"
            alt="فريق المتطوعين 2"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
