import Link from 'next/link'

const nav = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link href="/" className="text-sm font-medium tracking-widest uppercase">
          PHOTO
        </Link>
        <nav className="flex items-center gap-6">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-wider text-zinc-500 hover:text-black transition-colors uppercase"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
