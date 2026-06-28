import Link from "next/link"
import { getAllAlbums } from "@/lib/albums"
import { getPhotosByAlbum } from "@/lib/photos"

export default function GalleryPage() {
  const albums = getAllAlbums()

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <h1 className="text-2xl font-light tracking-tight mb-2">Gallery</h1>
      <p className="text-sm text-zinc-400 mb-12">摄影作品</p>

      {albums.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-sm text-zinc-300">No albums yet</p>
        </div>
      ) : (
        <div className="space-y-14">
          {albums.map((album) => {
            const photos = getPhotosByAlbum(album.slug)
            return (
              <section key={album.slug}>
                <div className="flex items-baseline gap-3 mb-5">
                  <h2 className="text-sm font-medium">{album.title}</h2>
                  <span className="text-[11px] text-zinc-300">{photos.length} photos</span>
                </div>
                {photos.length > 0 ? (
                  <Link
                    href={`/gallery/${album.slug}`}
                    className="flex gap-1 overflow-x-auto pb-2 group"
                  >
                    {photos.slice(0, 10).map((photo) => (
                      <div
                        key={photo.slug}
                        className="w-28 h-20 flex-shrink-0 bg-zinc-100 group-hover:bg-zinc-200 transition-colors"
                      />
                    ))}
                    {photos.length > 10 && (
                      <div className="w-28 h-20 flex-shrink-0 bg-zinc-50 flex items-center justify-center text-[11px] text-zinc-300">
                        +{photos.length - 10}
                      </div>
                    )}
                  </Link>
                ) : (
                  <div className="h-20 bg-zinc-50 flex items-center justify-center">
                    <span className="text-[11px] text-zinc-300">No photos</span>
                  </div>
                )}
              </section>
            )
          })}
        </div>
      )}
    </div>
  )
}
