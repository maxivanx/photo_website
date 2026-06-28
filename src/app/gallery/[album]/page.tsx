import Link from "next/link"
import { notFound } from "next/navigation"
import { getAlbumBySlug, getAllAlbums } from "@/lib/albums"
import { getPhotosByAlbum } from "@/lib/photos"

export function generateStaticParams() {
  const albums = getAllAlbums()
  return albums.length > 0
    ? albums.map((album) => ({ album: album.slug }))
    : [{ album: '_placeholder' }]
}

interface Props {
  params: Promise<{ album: string }>
}

export default async function AlbumPage({ params }: Props) {
  const { album: slug } = await params
  const album = getAlbumBySlug(slug)
  if (!album) notFound()

  const photos = getPhotosByAlbum(slug)

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <Link
        href="/gallery"
        className="text-xs text-zinc-300 hover:text-black transition-colors inline-block mb-8"
      >
        ← Gallery
      </Link>

      <h1 className="text-2xl font-light tracking-tight mb-2">{album.title}</h1>
      <p className="text-sm text-zinc-400 mb-12">{album.description}</p>

      {photos.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-sm text-zinc-300">No photos yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
          {photos.map((photo) => (
            <a
              key={photo.slug}
              href={photo.image}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-zinc-100 hover:bg-zinc-200 transition-colors block relative overflow-hidden"
            >
              {photo.thumbnail && (
                <img
                  src={photo.thumbnail}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
