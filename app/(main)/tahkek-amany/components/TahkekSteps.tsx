"use client";

import { Heart, Share2, Star } from 'lucide-react'

export function TahkekSteps() {
  const steps = [
    {
      title: "شارك أمنيتك",
      description: "اكتب أمنيتك أو أمنية شخص تعرفه يحتاج للفرحة.",
      icon: <Share2 className="size-5 text-amber-500" />,
    },
    {
      title: "ندرس الحالة",
      description: "فريقنا يراجع الأمنيات ويتأكد من إمكانية تنفيذها.",
      icon: <Heart className="size-5 text-rose-500" />,
    },
    {
      title: "نحقق الحلم",
      description: "بمساعدة المتطوعين، نسعى لتحويل الأمنية لواقع.",
      icon: <Star className="size-5 text-sky-500" />,
    }
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-1">
      {steps.map((step, idx) => (
        <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
          <div className="flex-shrink-0 p-2 rounded-xl bg-slate-50 h-fit">
            {step.icon}
          </div>
          <div>
            <h3 className="font-bold text-slate-900">{step.title}</h3>
            <p className="text-sm text-slate-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
