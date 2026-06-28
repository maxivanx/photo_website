"use client"

interface HeroImageProps {
  className?: string
  src?: string
  title?: string
  subtitle?: string
}

export function HeroImage({ className, src, title, subtitle }: HeroImageProps) {
  if (!src) {
    return (
      <div className={`${className || ""} aspect-[16/9] bg-[#222] flex items-center justify-center text-[#666] text-sm`}>
        Add an image source
      </div>
    )
  }

  return (
    <div className={`${className || ""} relative bg-[#222]`}>
      <img src={src} alt={title || ""} className="w-full h-auto max-h-[80vh] object-contain mx-auto" />
      {(title || subtitle) && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          {title && <h2 className="text-white text-lg font-serif">{title}</h2>}
          {subtitle && <p className="text-white/70 text-sm mt-1">{subtitle}</p>}
        </div>
      )}
    </div>
  )
}
