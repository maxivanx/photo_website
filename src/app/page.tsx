import Link from "next/link"
import { getAllAlbums } from "@/lib/albums"
import { getPhotosByAlbum } from "@/lib/photos"
import { getAllPosts } from "@/lib/blog"
import { imagePath } from "@/lib/config"

export default function Home() {
  const albums = getAllAlbums()
  const posts = getAllPosts()

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 py-24 sm:py-32">
        <h1 className="text-5xl sm:text-7xl font-light tracking-tight leading-none">
          Photo
        </h1>
        <p className="mt-6 text-base text-zinc-400 max-w-md leading-relaxed">
          用镜头记录世界，用影像讲述故事
        </p>
      </section>

      {albums.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs tracking-[0.2em] text-zinc-400 uppercase">作品集</h2>
            <Link href="/gallery" className="text-xs text-zinc-400 hover:text-black transition-colors">
              查看全部 →
            </Link>
          </div>
          <div className="space-y-16">
            {albums.map((album, idx) => {
              const albumPhotos = getPhotosByAlbum(album.slug)
              const previews = albumPhotos.slice(0, 4)
              return (
                <Link
                  key={album.slug}
                  href={`/gallery/${album.slug}`}
                  className="group block"
                >
                  <h3 className="text-lg font-medium mb-4 group-hover:opacity-60 transition-opacity">
                    {album.title}
                  </h3>
                  {previews.length > 0 ? (
                    <div className={`grid gap-1 ${previews.length === 1 ? 'grid-cols-1' : previews.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-4'}`}>
                      {previews.map((photo) => (
                        <div key={photo.slug} className="aspect-[4/3] bg-zinc-50 overflow-hidden">
                          <img
                            src={imagePath(photo.image)}
                            alt={photo.title}
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                            loading={idx < 2 ? "eager" : "lazy"}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-zinc-50 flex items-center justify-center">
                      <span className="text-xs text-zinc-300">暂无照片</span>
                    </div>
                  )}
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {posts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs tracking-[0.2em] text-zinc-400 uppercase">博客</h2>
            <Link href="/blog" className="text-xs text-zinc-400 hover:text-black transition-colors">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 6).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="aspect-[16/10] bg-zinc-50 mb-4" />
                <time className="text-xs text-zinc-300">{post.date}</time>
                <h3 className="text-sm font-medium mt-1.5 group-hover:opacity-60 transition-opacity">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
