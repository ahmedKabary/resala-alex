"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Anchor, Fish } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen" style={{ backgroundImage: 'url("/volunteer1.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-sky-100 text-sky-700 text-sm font-semibold shadow-sm animate-fade-in">
            <Anchor className="size-4 text-sky-700 animate-pulse" />
            <span>رسالة قوافل خارجي إسكندرية</span>
            <Fish className="size-4 text-sky-700 animate-pulse" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] animate-slide-up drop-shadow-2xl">
            نصنع <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">الأمل</span> <br /> 
            في كل مكان
          </h1>
          
          <p className="max-w-2xl text-xl text-white/90 leading-relaxed animate-slide-up delay-100 drop-shadow-lg">
            انضم إلينا في رحلتنا الإنسانية. 
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-200">
            <Button asChild size="lg" className="rounded-2xl px-8 h-14 text-lg font-bold shadow-lg shadow-sky-200 hover:shadow-xl transition-all bg-white text-sky-700 hover:bg-sky-50">
              <Link href="/volunteer">ابدأ التطوع الآن</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-2xl px-8 h-14 text-lg font-bold bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
              <Link href="/about">اعرف المزيد عنا</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/20 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>
    </section>
  );
}
