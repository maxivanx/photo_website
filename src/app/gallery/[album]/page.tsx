import Link from "next/link"
import { notFound } from "next/navigation"
import { getAlbumBySlug, getAllAlbums } from "@/lib/albums"
import { getPhotosByAlbum } from "@/lib/photos"
import { imagePath } from "@/lib/config"

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
    <div className="max-w-7xl mx-auto px-6 py-24">
      <Link
        href="/gallery"
        className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-black transition-colors mb-12"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        返回作品集
      </Link>

      <h1 className="text-3xl sm:text-4xl font-light tracking-tight mb-3">{album.title}</h1>
      <p className="text-sm text-zinc-400 mb-16 max-w-lg">{album.description}</p>

      {photos.length === 0 ? (
        <div className="text-center py-32">
          <p className="text-sm text-zinc-300">暂无照片</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
          {photos.map((photo) => (
            <a
              key={photo.slug}
              href={imagePath(photo.image)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-zinc-50 overflow-hidden"
            >
              <img
                src={imagePath(photo.image)}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-medium truncate">{photo.title}</p>
                {photo.camera && (
                  <p className="text-white/60 text-[10px] mt-0.5 truncate">{photo.camera}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
