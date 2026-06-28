"use client"

interface FooterSectionProps {
  className?: string
  copyright?: string
}

export function FooterSection({ className, copyright = "Photo" }: FooterSectionProps) {
  return (
    <footer className={`${className || ""} border-t border-[#3a3a3a] mt-24 py-10 text-center`}>
      <p className="text-xs text-[#666] tracking-wider">
        &copy; {new Date().getFullYear()} {copyright}
      </p>
    </footer>
  )
}
