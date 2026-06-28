"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

interface HeaderSectionProps {
  className?: string
  siteName?: string
}

export function HeaderSection({ className, siteName = "PHOTO" }: HeaderSectionProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Portfolios" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className={className}>
      <div className="text-center py-8 sm:py-10">
        <Link href="/" className="inline-block">
          <h1 className="text-4xl sm:text-5xl font-serif tracking-wide text-[#e8e8e8]">
            {siteName}
          </h1>
        </Link>
      </div>

      <div className="bg-[#2a2a2a] border-y border-[#3a3a3a]">
        <div className="max-w-6xl mx-auto px-4">
          <button
            className="w-full py-3 text-xs tracking-[0.15em] text-[#a0a0a0] uppercase md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <nav className={`${menuOpen ? "block" : "hidden"} md:flex md:items-center md:justify-center md:gap-1 py-2`}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block md:inline-block px-4 py-2 text-xs tracking-[0.15em] uppercase ${
                  pathname === link.href
                    ? "text-[#e8e8e8]"
                    : "text-[#a0a0a0] hover:text-[#e8e8e8]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
