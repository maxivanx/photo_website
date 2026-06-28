export interface Photo {
  slug: string
  title: string
  date: string
  image: string
  thumbnail?: string
  album: string
  order: number
  width: 1 | 2 | 3
  height: 1 | 2
  featured: boolean
  description: string
  tags?: string[]
  camera?: string
  lens?: string
}

export interface Album {
  slug: string
  title: string
  description: string
  cover: string
  order: number
  template: 'masonry' | 'grid' | 'fullwidth' | 'carousel'
  featured?: boolean
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  tags: string[]
  cover?: string
  content: string
  excerpt?: string
}

export type LayoutTemplate = 'masonry' | 'grid' | 'fullwidth' | 'carousel'
