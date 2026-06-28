'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header>
      <div className="text-center py-8 sm:py-10">
        <Link href="/" className="inline-block">
          <h1 className="text-4xl sm:text-5xl font-serif tracking-wide text-[#e8e8e8]">
            PHOTO
          </h1>
        </Link>
      </div>

      <div className="bg-[#2a2a2a] border-y border-[#3a3a3a]">
        <div className="max-w-6xl mx-auto px-4">
          <button
            className="w-full py-3 text-xs tracking-[0.15em] text-[#a0a0a0] uppercase md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <nav className={`${menuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center md:gap-1 py-2`}>
            <Link
              href="/"
              className={`block md:inline-block px-4 py-2 text-xs tracking-[0.15em] uppercase ${
                pathname === '/' ? 'text-[#e8e8e8]' : 'text-[#a0a0a0] hover:text-[#e8e8e8]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className={`block md:inline-block px-4 py-2 text-xs tracking-[0.15em] uppercase ${
                pathname.startsWith('/gallery') ? 'text-[#e8e8e8]' : 'text-[#a0a0a0] hover:text-[#e8e8e8]'
              }`}
            >
              Portfolios
            </Link>
            <Link
              href="/blog"
              className={`block md:inline-block px-4 py-2 text-xs tracking-[0.15em] uppercase ${
                pathname.startsWith('/blog') ? 'text-[#e8e8e8]' : 'text-[#a0a0a0] hover:text-[#e8e8e8]'
              }`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`block md:inline-block px-4 py-2 text-xs tracking-[0.15em] uppercase ${
                pathname === '/about' ? 'text-[#e8e8e8]' : 'text-[#a0a0a0] hover:text-[#e8e8e8]'
              }`}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
