"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-600 to-indigo-700 rounded-[3rem] p-12 sm:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-sky-200">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black sm:text-5xl leading-tight">جاهز لتكون جزءاً من التغيير؟</h2>
            <p className="text-sky-100 text-xl leading-relaxed opacity-90">
              سواء كنت تريد التطوع بوقتك أو بجهدك، كل مساهمة تصنع فرقاً حقيقياً في حياة شخص ما بالإسكندرية.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-white text-sky-700 hover:bg-sky-50 rounded-2xl px-10 h-14 text-lg font-bold shadow-xl">
                <Link href="/volunteer">سجل كمتطوع</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
