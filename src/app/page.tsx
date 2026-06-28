import Link from "next/link";
import { getFeaturedAlbums } from "@/lib/albums";
import { getFeaturedPhotos } from "@/lib/photos";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const albums = getFeaturedAlbums();
  const photos = getFeaturedPhotos();
  const posts = getAllPosts();

  return (
    <div>
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-zinc-900">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
            光影之间
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto">
            用镜头记录世界，用影像讲述故事
          </p>
          <Link
            href="/gallery"
            className="inline-block mt-8 px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
          >
            浏览作品集
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold">精选相册</h2>
          <Link
            href="/gallery"
            className="text-sm text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
          >
            查看全部 →
          </Link>
        </div>
        {albums.length === 0 ? (
          <div className="text-center py-16 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg">
            <p className="text-zinc-400 text-lg">暂无相册</p>
            <p className="text-zinc-400 text-sm mt-2">通过 content/albums/ 添加相册</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <Link
                key={album.slug}
                href={`/gallery/${album.slug}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900"
              >
                <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-lg font-medium">{album.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{album.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {photos.length > 0 && (
        <section className="bg-zinc-50 dark:bg-zinc-900/50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-10">精选作品</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.slug}
                  className="aspect-[4/3] rounded-lg bg-zinc-200 dark:bg-zinc-800"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {posts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold">最新博客</h2>
            <Link
              href="/blog"
              className="text-sm text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            >
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden"
              >
                <div className="w-full aspect-[16/9] bg-zinc-100 dark:bg-zinc-900" />
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <time className="block mt-2 text-xs text-zinc-400">{post.date}</time>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
