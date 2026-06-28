import PhotoCard from './PhotoCard'
import type { Photo } from '@/types'

interface Props {
  photos: Photo[]
  priority?: boolean
}

export default function GridLayout({ photos, priority }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {photos.map((photo, i) => (
        <PhotoCard key={photo.slug} photo={photo} priority={priority && i < 3} />
      ))}
    </div>
  )
}
