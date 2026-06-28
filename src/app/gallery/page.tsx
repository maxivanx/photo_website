import Link from "next/link";
import Image from "next/image";
import { getAllAlbums } from "@/lib/albums";

export default function GalleryPage() {
  const albums = getAllAlbums();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">作品集</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-12">
        选择相册浏览我的摄影作品
      </p>

      {albums.length === 0 ? (
        <div className="text-center py-20 text-zinc-400">
          <p className="text-lg">暂无相册</p>
          <p className="text-sm mt-2">请通过后台管理添加相册和照片</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <Link
              key={album.slug}
              href={`/gallery/${album.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900 mb-4">
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <h2 className="text-lg font-semibold">{album.title}</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                {album.description}
              </p>
              <p className="text-xs text-zinc-400 mt-2 capitalize">
                模板: {album.template}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
