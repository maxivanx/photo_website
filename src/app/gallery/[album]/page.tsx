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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/gallery"
        className="text-xs text-[#666] hover:text-[#e8e8e8] transition-colors inline-block mb-10"
      >
        ← Back to Portfolios
      </Link>

      <h1 className="text-2xl font-serif tracking-wide mb-12 text-center">
        {album.title}
      </h1>

      {photos.length === 0 ? (
        <div className="text-center py-32">
          <p className="text-sm text-[#666]">No photos yet</p>
        </div>
      ) : (
        <div className="space-y-16">
          {photos.map((photo) => (
            <div key={photo.slug} className="space-y-3">
              <a
                href={imagePath(photo.image)}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#222]"
              >
                <img
                  src={imagePath(photo.image)}
                  alt={photo.title}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </a>
              <div className="text-center text-sm text-[#888] space-y-1">
                <p className="text-[#e8e8e8] text-xs tracking-wide">{photo.title}</p>
                {photo.camera && <p className="text-[11px]">{photo.camera}</p>}
                {photo.lens && <p className="text-[11px]">{photo.lens}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
