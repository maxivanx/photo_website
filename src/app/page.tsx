import Link from "next/link";
import Image from "next/image";
import { getFeaturedPhotos } from "@/lib/photos";
import { getFeaturedAlbums } from "@/lib/albums";
import { getAllPosts } from "@/lib/blog";
import PhotoCard from "@/components/PhotoCard";

export default function Home() {
  const featuredPhotos = getFeaturedPhotos().slice(0, 6);
  const albums = getFeaturedAlbums();
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div>
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-zinc-900 overflow-hidden">
        <Image
          src="https://picsum.photos/seed/hero/1920/1080"
          alt="Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
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

      {albums.length > 0 && (
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <Link
                key={album.slug}
                href={`/gallery/${album.slug}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900"
              >
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-lg font-medium">{album.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{album.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {featuredPhotos.length > 0 && (
        <section className="bg-zinc-50 dark:bg-zinc-900/50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold">精选作品</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredPhotos.map((photo, i) => (
                <PhotoCard key={photo.slug} photo={photo} priority={i < 3} />
              ))}
            </div>
          </div>
        </section>
      )}

      {latestPosts.length > 0 && (
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
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                {post.cover && (
                  <div className="relative w-full aspect-[16/9] bg-zinc-100 dark:bg-zinc-900">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
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
