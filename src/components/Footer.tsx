export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-300 tracking-wider">
          &copy; {new Date().getFullYear()} Photo. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-zinc-300 hover:text-black transition-colors">Instagram</a>
          <a href="#" className="text-xs text-zinc-300 hover:text-black transition-colors">微博</a>
        </div>
      </div>
    </footer>
  )
}
