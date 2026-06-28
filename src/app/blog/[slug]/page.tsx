import Link from "next/link"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/blog"

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.length > 0
    ? posts.map((post) => ({ slug: post.slug }))
    : [{ slug: '_placeholder' }]
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="text-xs text-[#666] hover:text-[#e8e8e8] transition-colors inline-block mb-10"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-2xl font-serif tracking-wide mb-3">{post.title}</h1>

      <div className="flex items-center gap-4 mb-12 text-xs text-[#666]">
        <time>{post.date}</time>
        {post.tags?.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>

      <div className="text-sm text-[#a0a0a0] leading-relaxed space-y-4">
        {post.content.split('\n').map((line, i) => {
          if (line.trim() === '') return <div key={i} className="h-3" />
          if (line.startsWith('# ')) return <h2 key={i} className="text-lg font-serif text-[#e8e8e8] mt-8 mb-3">{line.slice(2)}</h2>
          if (line.startsWith('## ')) return <h3 key={i} className="text-base font-serif text-[#e8e8e8] mt-6 mb-2">{line.slice(3)}</h3>
          if (line.startsWith('> ')) return <blockquote key={i} className="border-l-2 border-[#555] pl-4 text-[#888] italic my-4">{line.slice(2)}</blockquote>
          if (line.startsWith('- ')) return <li key={i} className="ml-4 text-[#a0a0a0]">{line.slice(2)}</li>
          if (line.match(/^\d+\. /)) return <li key={i} className="ml-4 text-[#a0a0a0] list-decimal">{line.replace(/^\d+\. /, '')}</li>
          return <p key={i}>{line}</p>
        })}
      </div>
    </article>
  )
}
