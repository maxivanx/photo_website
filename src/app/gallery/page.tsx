import Link from "next/link"
import { getAllAlbums } from "@/lib/albums"
import { getPhotosByAlbum } from "@/lib/photos"
import { imagePath } from "@/lib/config"

export default function GalleryPage() {
  const albums = getAllAlbums()

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-light tracking-tight mb-2">作品集</h1>
      <p className="text-sm text-zinc-400 mb-16">摄影作品</p>

      {albums.length === 0 ? (
        <div className="text-center py-32">
          <p className="text-sm text-zinc-300">暂无相册</p>
        </div>
      ) : (
        <div className="space-y-24">
          {albums.map((album) => {
            const photos = getPhotosByAlbum(album.slug)
            return (
              <section key={album.slug}>
                <div className="flex items-baseline gap-4 mb-6">
                  <h2 className="text-lg font-medium">{album.title}</h2>
                  <span className="text-xs text-zinc-300">{photos.length} 张</span>
                </div>
                <Link
                  href={`/gallery/${album.slug}`}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 group"
                >
                  {photos.slice(0, 8).map((photo, idx) => (
                    <div
                      key={photo.slug}
                      className={`aspect-square bg-zinc-50 overflow-hidden ${
                        idx === 0 ? 'row-span-2 col-span-2' : ''
                      }`}
                    >
                      <img
                        src={imagePath(photo.image)}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-500"
                        loading={idx < 4 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </Link>
                {photos.length > 8 && (
                  <div className="mt-4 text-right">
                    <Link
                      href={`/gallery/${album.slug}`}
                      className="text-xs text-zinc-400 hover:text-black transition-colors"
                    >
                      查看全部 {photos.length} 张 →
                    </Link>
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
