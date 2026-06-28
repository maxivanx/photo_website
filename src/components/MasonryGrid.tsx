import PhotoCard from './PhotoCard'
import type { Photo } from '@/types'

interface Props {
  photos: Photo[]
  priority?: boolean
}

export default function MasonryGrid({ photos, priority }: Props) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {photos.map((photo, i) => (
        <div key={photo.slug} className="break-inside-avoid">
          <PhotoCard photo={photo} priority={priority && i < 3} />
        </div>
      ))}
    </div>
  )
}
