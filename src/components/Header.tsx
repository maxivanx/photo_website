'use client'

import Link from 'next/link'
import { useState } from 'react'

const nav = [
  { href: '/', label: '首页' },
  { href: '/gallery', label: '作品集' },
  { href: '/blog', label: '博客' },
  { href: '/about', label: '关于' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          PHOTO
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-4 py-4 space-y-3">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block text-sm font-medium text-zinc-600 dark:text-zinc-400"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
