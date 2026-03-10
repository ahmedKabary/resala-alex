'use client';

import { PageShell } from '@/components/desktop/PageShell'
import { EventsHeader } from './components/EventsHeader'
import { EventsGrid } from './components/EventsGrid'

export default function EventsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
        <EventsHeader />
        <EventsGrid />
      </div>
    </PageShell>
  );
}

