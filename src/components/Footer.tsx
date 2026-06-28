export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-20">
      <div className="max-w-5xl mx-auto px-5 py-8 text-center">
        <p className="text-[11px] tracking-wider text-zinc-400 uppercase">
          &copy; {new Date().getFullYear()} Photo
        </p>
      </div>
    </footer>
  )
}
