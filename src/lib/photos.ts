function formatDate(date: unknown): string {
  if (date instanceof Date) {
    return date.toISOString().slice(0, 10)
  }
  return String(date ?? '')
}

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Photo } from '@/types'

const photosDir = path.join(process.cwd(), 'content', 'photos')

export function getAllPhotos(): Photo[] {
  if (!fs.existsSync(photosDir)) return []

  const files = fs.readdirSync(photosDir)
  const photos = files
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(photosDir, f), 'utf-8')
      const { data } = matter(raw)
      return {
        slug: f.replace(/\.md$/, ''),
        title: data.title,
        date: formatDate(data.date),
        image: data.image,
        thumbnail: data.thumbnail,
        album: data.album,
        order: data.order ?? 0,
        width: data.width ?? 1,
        height: data.height ?? 1,
        featured: data.featured ?? false,
        description: data.description ?? '',
        tags: data.tags ?? [],
        camera: data.camera,
        lens: data.lens,
      } as Photo
    })

  return photos.sort((a, b) => a.order - b.order)
}

export function getPhotosByAlbum(albumSlug: string): Photo[] {
  return getAllPhotos().filter((p) => p.album === albumSlug)
}

export function getFeaturedPhotos(): Photo[] {
  return getAllPhotos().filter((p) => p.featured)
}

export function getPhotoBySlug(slug: string): Photo | undefined {
  return getAllPhotos().find((p) => p.slug === slug)
}
