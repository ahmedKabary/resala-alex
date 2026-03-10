'use client';

import { PageShell } from '@/components/desktop/PageShell'
import { AboutHeader } from './components/AboutHeader'
import { AboutCards } from './components/AboutCards'
import { AboutWishes } from './components/AboutWishes'
import { AboutButtons } from './components/AboutButtons'

export default function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
        <AboutHeader />
        <AboutCards />
        <AboutWishes />
        <AboutButtons />
      </div>
    </PageShell>
  );
}
