import { getAllPosts, getAllTags } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">博客</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        摄影技巧、拍摄故事与创作心得
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-12">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {posts.length === 0 ? (
        <div className="text-center py-20 text-zinc-400">
          <p className="text-lg">暂无博客文章</p>
          <p className="text-sm mt-2">请通过后台管理添加文章</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
