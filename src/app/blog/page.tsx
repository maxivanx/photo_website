import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">博客</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        摄影技巧、拍摄故事与创作心得
      </p>

      {posts.length === 0 ? (
        <div className="text-center py-24 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg">
          <p className="text-zinc-400 text-lg">暂无博客文章</p>
          <p className="text-zinc-400 text-sm mt-2">在 content/blog/ 目录下添加文章</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.slug} />
          ))}
        </div>
      )}
    </div>
  );
}
