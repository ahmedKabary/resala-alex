'use client';

import { PageShell } from '@/components/desktop/PageShell'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { CTASection } from './components/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PageShell>
        <ServicesSection />
        <CTASection />
      </PageShell>
    </>
  );
}

