"use client";

import { LoadingImage } from '@/components/desktop/LoadingImage'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Users, Calendar, ArrowRight, Sparkles as SparklesIcon } from 'lucide-react'

export function ServicesSection() {
  const sections = [
    {
      title: "تحقيق الأماني",
      description: "نساعد في رسم البسمة وتحقيق أحلام من هم في حاجة إليها بأبسط الوسائل.",
      href: "/tahkek-amany",
      icon: <SparklesIcon className="size-6 text-amber-500" />,
      color: "from-amber-500/10 to-amber-500/5 hover:border-amber-500/50",
      buttonText: "شارك أمنيتك",
      image: "/amany.png",
      tag: "أمنيات"
    },
    {
      title: "تطوع معنا",
      description: "كن جزءاً من فريقنا وساهم بوقتك وجهدك في نشر الخير في إسكندرية.",
      href: "/volunteer",
      icon: <Users className="size-6 text-sky-500" />,
      color: "from-sky-500/10 to-sky-500/5 hover:border-sky-500/50",
      buttonText: "انضم إلينا",
      image: "/Resala.png",
      tag: "تطوع"
    },
    {
      title: "الأحداث والفعاليات",
      description: "تابع آخر القوافل والفعاليات التي نقوم بها في مختلف مناطق الإسكندرية.",
      href: "/events",
      icon: <Calendar className="size-6 text-emerald-500" />,
      color: "from-emerald-500/10 to-emerald-500/5 hover:border-emerald-500/50",
      buttonText: "اكتشف الفعاليات",
      image: "/genie.png",
      tag: "فعاليات"
    }
  ];

  return (
    <section className="py-20 bg-slate-50/50 backdrop-blur-sm border-y border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">مبادراتنا</h2>
          <p className="text-slate-600">اكتشف كيف يمكنك المشاركة أو الاستفادة من مبادراتنا المختلفة</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {sections.map((section, idx) => (
            <div key={idx} className="group relative">
              <div className={`absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10`} />
              <Card className="h-full border-2 border-slate-100/80 bg-white/80 backdrop-blur shadow-sm transition-all duration-300 group-hover:border-transparent group-hover:shadow-xl rounded-[2rem] overflow-hidden">
                <CardHeader className="pb-4 relative">
                  <span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {section.tag}
                  </span>
                  <div className="mb-4 inline-flex p-4 rounded-2xl bg-white shadow-sm border border-slate-50 w-fit group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <CardTitle className="text-2xl font-black text-slate-900">{section.title}</CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed mt-2">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-[16/10] w-full mb-6 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-inner group-hover:scale-[1.02] transition-transform duration-500">
                    <LoadingImage
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-contain p-6 drop-shadow-md"
                    />
                  </div>
                  <Button asChild className="w-full rounded-2xl h-12 text-md font-bold group-hover:gap-4 transition-all" variant="default">
                    <Link href={section.href}>
                      {section.buttonText}
                      <ArrowRight className="mr-2 size-5 transition-transform group-hover:-translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
