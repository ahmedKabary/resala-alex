"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { House, Users, Calendar, Heart, UserRound } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/volunteer', label: 'تطوع', icon: Users },
    { href: '/tahkek-amany', label: 'أمنيات', icon: Heart },
    { href: '/', label: 'الرئيسية', icon: House, isMain: true },
    { href: '/events', label: 'فعاليات', icon: Calendar },
    { href: '/profile', label: 'حسابي', icon: UserRound },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-slate-200 px-4 py-3 flex items-center justify-between gap-1">
      <nav className="w-full flex items-center justify-between gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          if (item.isMain) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative group flex-1 py-1"
              >
                <div className={cn(
                  "size-16 rounded-full bg-gradient-to-tr from-sky-600 to-indigo-700 p-0.5 shadow-xl shadow-sky-200 transition-transform duration-300 group-hover:scale-110 active:scale-95 flex items-center justify-center",
                  isActive && "ring-4 ring-white shadow-sky-300"
                )}>
                  <div className="size-full rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center border border-white/20">
                    <Icon className="size-7 text-white" />
                  </div>
                </div>
                <span className="sr-only">{item.label}</span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 flex-1 py-1 group"
            >
              <div className={cn(
                "p-2 rounded-2xl transition-all duration-300 group-hover:bg-sky-50",
                isActive ? "bg-sky-50 text-sky-600" : "text-slate-500 group-hover:text-sky-600"
              )}>
                <Icon className={cn(
                  "size-5 transition-transform duration-300 group-hover:scale-110",
                  isActive && "scale-110"
                )} />
              </div>
              <span className={cn(
                "text-[10px] font-bold transition-colors duration-300",
                isActive ? "text-sky-600" : "text-slate-400 group-hover:text-sky-600"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
