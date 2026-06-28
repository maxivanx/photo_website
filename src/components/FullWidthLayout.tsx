import type { Photo } from '@/types'

interface Props {
  photos: Photo[]
  priority?: boolean
}

export default function FullWidthLayout({ photos }: Props) {
  return (
    <div className="space-y-8">
      {photos.map((photo, i) => (
        <div key={photo.slug} className="relative w-full rounded-lg bg-zinc-100 dark:bg-zinc-900" style={{ aspectRatio: '16/9' }}>
          <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
            <h3 className="text-white text-lg font-medium">{photo.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
