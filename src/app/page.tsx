import Link from "next/link"
import { getAllAlbums } from "@/lib/albums"
import { getPhotosByAlbum } from "@/lib/photos"
import { getAllPosts } from "@/lib/blog"

export default function Home() {
  const albums = getAllAlbums()
  const posts = getAllPosts()

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <div className="mb-20">
        <h1 className="text-3xl font-light tracking-tight">Photo</h1>
        <p className="mt-3 text-sm text-zinc-400 max-w-md leading-relaxed">
          通过镜头记录世界，用影像讲述故事
        </p>
      </div>

      {albums.length > 0 && (
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs tracking-widest text-zinc-400 uppercase">Albums</h2>
            <Link href="/gallery" className="text-xs text-zinc-400 hover:text-black transition-colors">
              View all →
            </Link>
          </div>
          <div className="space-y-10">
            {albums.slice(0, 3).map((album) => {
              const albumPhotos = getPhotosByAlbum(album.slug)
              return (
                <Link key={album.slug} href={`/gallery/${album.slug}`} className="group block">
                  <h3 className="text-sm font-medium mb-3">{album.title}</h3>
                  {albumPhotos.length > 0 ? (
                    <div className="flex gap-1 overflow-x-auto pb-2">
                      {albumPhotos.slice(0, 8).map((photo) => (
                        <div
                          key={photo.slug}
                          className="w-24 h-16 flex-shrink-0 bg-zinc-100 overflow-hidden"
                        >
                          <img src={photo.image} alt={photo.title} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-16 bg-zinc-50 flex items-center justify-center">
                      <span className="text-[11px] text-zinc-300">No photos</span>
                    </div>
                  )}
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {posts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs tracking-widest text-zinc-400 uppercase">Blog</h2>
            <Link href="/blog" className="text-xs text-zinc-400 hover:text-black transition-colors">
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {posts.slice(0, 4).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div className="flex items-center gap-4">
                  <time className="text-xs text-zinc-300 w-20 flex-shrink-0">{post.date}</time>
                  <h3 className="text-sm group-hover:underline underline-offset-2">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
