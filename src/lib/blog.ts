function formatDate(date: unknown): string {
  if (date instanceof Date) {
    return date.toISOString().slice(0, 10)
  }
  return String(date ?? '')
}

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPost } from '@/types'

const blogDir = path.join(process.cwd(), 'content', 'blog')

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return []

  const files = fs.readdirSync(blogDir)
  const posts = files
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(blogDir, f), 'utf-8')
      const { data, content } = matter(raw)
      const excerpt = content.replace(/^# .+\n/, '').trim().slice(0, 200) + '...'
      return {
        slug: f.replace(/\.md$/, ''),
        title: data.title,
        date: formatDate(data.date),
        tags: data.tags ?? [],
        cover: data.cover,
        content,
        excerpt,
      } as BlogPost
    })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  getAllPosts().forEach((p) => p.tags?.forEach((t) => tags.add(t)))
  return Array.from(tags).sort()
}
