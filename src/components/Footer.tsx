export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Photo Website. All rights reserved.</p>
      </div>
    </footer>
  )
}
