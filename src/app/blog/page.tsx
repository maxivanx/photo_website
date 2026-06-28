import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-serif tracking-wide mb-10 text-center text-[#a0a0a0]">
        Blog
      </h1>

      {posts.length === 0 ? (
        <div className="text-center py-32">
          <p className="text-sm text-[#666]">No posts yet</p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group border-b border-[#3a3a3a] pb-6"
            >
              <time className="text-xs text-[#666]">{post.date}</time>
              <h2 className="text-base font-serif mt-1 text-[#e8e8e8] group-hover:text-[#a0a0a0] transition-colors">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-sm text-[#888] mt-2 leading-relaxed">{post.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
