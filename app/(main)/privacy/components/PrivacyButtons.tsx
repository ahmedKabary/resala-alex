'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function PrivacyButtons() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-3">
      <Button asChild size="lg" className="rounded-full">
        <Link href="/login">ابدأ الآن</Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="rounded-full bg-white/60">
        <Link href="/">العودة للرئيسية</Link>
      </Button>
    </div>
  );
}
