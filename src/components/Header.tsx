'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/gallery', label: '作品集' },
  { href: '/blog', label: '博客' },
  { href: '/about', label: '关于' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.2em] uppercase"
        >
          Photo
        </Link>
        <nav className="flex items-center gap-8">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-widest uppercase transition-colors ${
                pathname.startsWith(href)
                  ? 'text-black'
                  : 'text-zinc-400 hover:text-black'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
