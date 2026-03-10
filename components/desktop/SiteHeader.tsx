'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart, Users, Calendar, UserRound, Info, Shield } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function SiteHeader({
  className,
  right,
}: {
  className?: string
  right?: React.ReactNode
}) {
  const pathname = usePathname()
  const navItems = [
    { href: '/', label: 'الرئيسية' },
    { href: '/tahkek-amany', label: 'أمنيات' },
    { href: '/volunteer', label: 'تطوع' },
    { href: '/events', label: 'فعاليات' },
    { href: '/profile', label: 'حسابي' },
    { href: '/about', label: 'عن القوافل' },
    { href: '/privacy', label: 'الخصوصية' },
  ]

  return (
    <header className={cn('sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Desktop Navigation */}
          <nav className="flex items-center gap-1 mx-auto">
            {navItems.map(({ href, label }) => (
              <Button
                key={href}
                asChild
                variant="ghost"
                size="sm"
                className={cn(
                  'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-sky-50 hover:text-sky-700',
                  pathname === href
                    ? 'bg-sky-100 text-sky-800 border border-sky-200'
                    : 'text-slate-700 hover:scale-105'
                )}
              >
                <Link href={href}>{label}</Link>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
