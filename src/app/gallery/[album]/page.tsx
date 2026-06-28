import { notFound } from "next/navigation";
import { getAlbumBySlug, getAllAlbums } from "@/lib/albums";
import { getPhotosByAlbum } from "@/lib/photos";

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
  const { album: slug } = await params;
  const album = getAlbumBySlug(slug);
  if (!album) notFound();

  const photos = getPhotosByAlbum(slug);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">{album.title}</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-12">
        {album.description}
      </p>

      {photos.length === 0 ? (
        <div className="text-center py-24 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg">
          <p className="text-zinc-400 text-lg">暂无照片</p>
          <p className="text-zinc-400 text-sm mt-2">在 content/photos/ 目录下添加照片</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.slug}
              className="aspect-[4/3] rounded-lg bg-zinc-100 dark:bg-zinc-900"
            />
          ))}
        </div>
      )}
    </div>
  );
}
