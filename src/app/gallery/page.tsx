import Link from "next/link"
import { getAllAlbums } from "@/lib/albums"
import { getPhotosByAlbum } from "@/lib/photos"
import { imagePath } from "@/lib/config"

export default function GalleryPage() {
  const albums = getAllAlbums()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-xl font-serif tracking-wide mb-10 text-center text-[#a0a0a0]">
        Portfolios
      </h1>

      {albums.length === 0 ? (
        <div className="text-center py-32">
          <p className="text-sm text-[#666]">No portfolios yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-[#2a2a2a]">
          {albums.map((album) => {
            const photos = getPhotosByAlbum(album.slug)
            const cover = photos[0]
            return (
              <Link
                key={album.slug}
                href={`/gallery/${album.slug}`}
                className="group relative bg-[#1a1a1a] overflow-hidden"
              >
                <div className="aspect-[4/3] bg-[#222]">
                  {cover && (
                    <img
                      src={imagePath(cover.image)}
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                  <h2 className="text-white text-lg sm:text-xl font-serif tracking-wide">
                    {album.title}
                  </h2>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
