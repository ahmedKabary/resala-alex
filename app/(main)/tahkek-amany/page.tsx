'use client';

import { PageShell } from '@/components/desktop/PageShell'
import { TahkekHeader } from './components/TahkekHeader'
import { TahkekSteps } from './components/TahkekSteps'
import { TahkekButtons } from './components/TahkekButtons'
import { TahkekImage } from './components/TahkekImage'

export default function TahkekAmanyPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <TahkekHeader />
            <TahkekSteps />
            <TahkekButtons />
          </div>
          <TahkekImage />
        </div>
      </div>
    </PageShell>
  );
}

