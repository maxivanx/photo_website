import Image from 'next/image'
import type { Photo } from '@/types'

interface Props {
  photos: Photo[]
  priority?: boolean
}

export default function FullWidthLayout({ photos, priority }: Props) {
  return (
    <div className="space-y-8">
      {photos.map((photo, i) => (
        <div key={photo.slug} className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <Image
            src={photo.image}
            alt={photo.title}
            fill
            className="object-cover rounded-lg"
            priority={priority && i < 2}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
            <h3 className="text-white text-lg font-medium">{photo.title}</h3>
            <p className="text-white/70 text-sm mt-1">{photo.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
