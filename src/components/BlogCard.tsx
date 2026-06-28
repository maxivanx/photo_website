import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/types'

interface Props {
  post: BlogPost
}

export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
        {post.cover && (
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
              {post.excerpt}
            </p>
          )}
          <time className="block mt-3 text-xs text-zinc-400">{post.date}</time>
        </div>
      </article>
    </Link>
  )
}
