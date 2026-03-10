'use client';

import { PageShell } from '@/components/desktop/PageShell'
import { PrivacyHeader } from './components/PrivacyHeader'
import { PrivacyCards } from './components/PrivacyCards'
import { PrivacyButtons } from './components/PrivacyButtons'

export default function PrivacyPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
        <PrivacyHeader />
        <PrivacyCards />
        <PrivacyButtons />
      </div>
    </PageShell>
  );
}
