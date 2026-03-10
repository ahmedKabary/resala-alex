'use client';

import React from 'react'
import { BrightBackground } from '@/components/desktop/BrightBackground'
import { SiteHeader } from '@/components/desktop/SiteHeader'
import { MobileTopNav } from '@/components/mobile/MobileTopNav'
import { MobileBottomNav } from '@/components/mobile/MobileBottomNav'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BrightBackground />
      <SiteHeader className="hidden md:block" />
      <MobileTopNav />
      <div className="pb-20 md:pb-0">
        {children}
      </div>
      <MobileBottomNav />
    </>
  );
}
