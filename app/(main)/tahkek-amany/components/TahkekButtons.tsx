"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function TahkekButtons() {
  return (
    <div className="pt-4 flex flex-col sm:flex-row gap-4">
      <Button asChild size="lg" className="rounded-full bg-amber-600 hover:bg-amber-700 text-white">
        <Link href="/tahkek-amany/form">أرسل أمنيتك الآن</Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="rounded-full">
        <Link href="/about">كيف نساعد؟</Link>
      </Button>
    </div>
  );
}
