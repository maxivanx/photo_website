import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">关于我</h1>

      <div className="flex flex-col sm:flex-row gap-8 items-start mb-12">
        <div className="relative w-48 h-48 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex-shrink-0 mx-auto sm:mx-0">
          <Image
            src="https://picsum.photos/seed/avatar/400/400"
            alt="Avatar"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            一名热爱摄影的创作者，专注于风光、人像和街拍。我相信每一张照片都是一个故事，而相机就是讲述这些故事的工具。
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            摄影让我学会了放慢脚步，用心观察身边的世界。无论是壮丽的自然景观，还是街头的平凡瞬间，都值得被记录和珍藏。
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
        <h2 className="text-xl font-semibold mb-4">设备清单</h2>
        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
          <li>• Sony A7IV 全画幅微单</li>
          <li>• Sony FE 24-70mm f/2.8 GM II</li>
          <li>• Sony FE 85mm f/1.4 GM</li>
          <li>• Sony FE 70-200mm f/4 G OSS</li>
          <li>• Sony FE 16-35mm f/2.8 GM</li>
          <li>• DJI Mavic 3 Pro 无人机</li>
        </ul>
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-8">
        <h2 className="text-xl font-semibold mb-4">联系我</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          如有合作或约拍需求，欢迎通过以下方式联系我：
        </p>
        <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
          <li>• 邮箱：photo@example.com</li>
          <li>• Instagram：@photographer</li>
          <li>• 微博：@摄影师</li>
        </ul>
      </div>
    </div>
  );
}
