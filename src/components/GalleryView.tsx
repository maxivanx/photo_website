'use client'

import { useState } from 'react'
import MasonryGrid from './MasonryGrid'
import GridLayout from './GridLayout'
import FullWidthLayout from './FullWidthLayout'
import type { Photo, LayoutTemplate } from '@/types'

const templates: { key: LayoutTemplate; label: string }[] = [
  { key: 'masonry', label: '瀑布流' },
  { key: 'grid', label: '网格' },
  { key: 'fullwidth', label: '全屏' },
]

interface Props {
  photos: Photo[]
  defaultTemplate?: LayoutTemplate
}

export default function GalleryView({ photos, defaultTemplate = 'masonry' }: Props) {
  const [template, setTemplate] = useState<LayoutTemplate>(defaultTemplate)

  if (photos.length === 0) {
    return (
      <div className="text-center py-20 text-zinc-400">
        <p className="text-lg">暂无照片</p>
        <p className="text-sm mt-2">请通过后台管理添加照片</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-8">
        <span className="text-sm text-zinc-500 dark:text-zinc-400">布局:</span>
        {templates.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTemplate(key)}
            className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
              template === key
                ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                : 'border-zinc-300 text-zinc-600 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-400'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {template === 'masonry' && <MasonryGrid photos={photos} />}
      {template === 'grid' && <GridLayout photos={photos} />}
      {template === 'fullwidth' && <FullWidthLayout photos={photos} />}
    </div>
  )
}
