import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

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
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/blog"
        className="text-sm text-zinc-500 hover:text-black dark:hover:text-white transition-colors mb-8 inline-block"
      >
        ← 返回博客
      </Link>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <div className="flex items-center gap-4 mb-8">
        <time className="text-sm text-zinc-400">{post.date}</time>
        {post.tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
        {post.content}
      </div>
    </article>
  );
}
