import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Album } from '@/types'

const albumsDir = path.join(process.cwd(), 'content', 'albums')

export function getAllAlbums(): Album[] {
  if (!fs.existsSync(albumsDir)) return []

  const files = fs.readdirSync(albumsDir)
  const albums = files
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(albumsDir, f), 'utf-8')
      const { data } = matter(raw)
      return {
        slug: f.replace(/\.md$/, ''),
        title: data.title,
        description: data.description,
        cover: data.cover,
        order: data.order ?? 0,
        template: data.template ?? 'masonry',
        featured: data.featured ?? false,
      } as Album
    })

  return albums.sort((a, b) => a.order - b.order)
}

export function getFeaturedAlbums(): Album[] {
  return getAllAlbums().filter((a) => a.featured)
}

export function getAlbumBySlug(slug: string): Album | undefined {
  return getAllAlbums().find((a) => a.slug === slug)
}
