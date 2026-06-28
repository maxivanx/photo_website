export default function Footer() {
  return (
    <footer className="border-t border-[#3a3a3a] mt-24 py-10 text-center">
      <p className="text-xs text-[#666] tracking-wider">
        &copy; {new Date().getFullYear()} Photo
      </p>
    </footer>
  )
}
