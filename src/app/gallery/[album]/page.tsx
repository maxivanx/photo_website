import { notFound } from "next/navigation";
import { getAlbumBySlug, getAllAlbums } from "@/lib/albums";
import { getPhotosByAlbum } from "@/lib/photos";
import GalleryView from "@/components/GalleryView";

export function generateStaticParams() {
  return getAllAlbums().map((album) => ({ album: album.slug }));
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

      <GalleryView photos={photos} defaultTemplate={album.template} />
    </div>
  );
}
