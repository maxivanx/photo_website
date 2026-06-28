import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
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

      {post.cover && (
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900 mb-8">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

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

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        {post.content.split('\n').map((line, i) => {
          if (line.startsWith('# ')) {
            return <h1 key={i} className="text-2xl font-bold mt-8 mb-4">{line.slice(2)}</h1>
          }
          if (line.startsWith('## ')) {
            return <h2 key={i} className="text-xl font-semibold mt-6 mb-3">{line.slice(3)}</h2>
          }
          if (line.startsWith('### ')) {
            return <h3 key={i} className="text-lg font-medium mt-4 mb-2">{line.slice(4)}</h3>
          }
          if (line.startsWith('- ')) {
            return <li key={i} className="text-zinc-700 dark:text-zinc-300 ml-4 list-disc">{line.slice(2)}</li>
          }
          if (line.startsWith('> ')) {
            return <blockquote key={i} className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 italic my-4 text-zinc-600 dark:text-zinc-400">{line.slice(2)}</blockquote>
          }
          if (line.startsWith('**') && line.endsWith('**')) {
            return <p key={i} className="font-bold text-zinc-700 dark:text-zinc-300 my-2">{line.slice(2, -2)}</p>
          }
          if (line.startsWith('*') && line.endsWith('*')) {
            return <p key={i} className="italic text-zinc-600 dark:text-zinc-400 my-2">{line.slice(1, -1)}</p>
          }
          if (line.trim() === '') {
            return <div key={i} className="h-4" />
          }
          if (line.match(/^\d+\. /)) {
            const content = line.replace(/^\d+\. /, '')
            return <li key={i} className="text-zinc-700 dark:text-zinc-300 ml-4 list-decimal">{content}</li>
          }
          return <p key={i} className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{line}</p>
        })}
      </div>
    </article>
  );
}
