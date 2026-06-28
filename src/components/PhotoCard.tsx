import type { Photo } from '@/types'

interface Props {
  photo: Photo
  priority?: boolean
}

export default function PhotoCard({ photo }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900">
      <div
        className="relative w-full"
        style={{
          gridRow: `span ${photo.height}`,
          aspectRatio: photo.height > 1 ? '3/4' : '4/3',
        }}
      >
        <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-sm font-medium truncate">{photo.title}</h3>
        </div>
      </div>
    </div>
  )
}
