"use client"

interface Photo {
  src: string
  title?: string
}

interface PhotoGridProps {
  className?: string
  photos?: { src: string; title?: string }[]
  columns?: number
}

const colMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
}

export function PhotoGrid({ className, photos = [], columns = 3 }: PhotoGridProps) {
  if (photos.length === 0) {
    return (
      <div className={`${className || ""} text-center py-16 text-sm text-[#666]`}>
        No photos added yet
      </div>
    )
  }

  return (
    <div className={`${className || ""} grid ${colMap[columns] || "grid-cols-3"} gap-1 bg-[#2a2a2a]`}>
      {photos.map((photo, i) => (
        <div key={i} className="bg-[#1a1a1a] overflow-hidden">
          <div className="aspect-[4/3] bg-[#222]">
            <img
              src={photo.src}
              alt={photo.title || ""}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
