'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Info, Shield } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function MobileTopNav() {
  const pathname = usePathname()
  const navItems = [
    { href: '/about', label: 'عن القوافل', icon: Info },
    { href: '/privacy', label: 'الخصوصية', icon: Shield },
  ]

  return (
    <header className="md:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-center gap-4">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200',
                  isActive
                    ? 'bg-sky-100 text-sky-800 border border-sky-200'
                    : 'text-slate-700 hover:bg-sky-50 hover:text-sky-700'
                )}
              >
                <Icon className="size-5" />
                {isActive && <span className="text-sm font-medium">{label}</span>}
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}
