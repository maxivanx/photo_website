import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-2xl font-light tracking-tight mb-2">Blog</h1>
      <p className="text-sm text-zinc-400 mb-12">摄影笔记</p>

      {posts.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-sm text-zinc-300">No posts yet</p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group border-b border-zinc-100 pb-6"
            >
              <time className="text-xs text-zinc-300">{post.date}</time>
              <h2 className="text-base font-medium mt-1 group-hover:underline underline-offset-2">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{post.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
