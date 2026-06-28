import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-2xl font-light tracking-tight mb-2">About</h1>
      <p className="text-sm text-zinc-400 mb-12">关于</p>

      <div className="space-y-6 text-sm text-zinc-700 leading-relaxed">
        <p>
          一名热爱摄影的创作者，专注于风光、人像和街拍。
        </p>
        <p>
          摄影让我学会了放慢脚步，用心观察身边的世界。
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-zinc-100">
        <h2 className="text-xs tracking-widest text-zinc-400 uppercase mb-4">Equipment</h2>
        <ul className="text-sm text-zinc-600 space-y-1.5">
          <li>Sony A7IV</li>
          <li>FE 24-70mm f/2.8 GM II</li>
          <li>FE 85mm f/1.4 GM</li>
        </ul>
      </div>

      <div className="mt-8 pt-8 border-t border-zinc-100">
        <h2 className="text-xs tracking-widest text-zinc-400 uppercase mb-4">Contact</h2>
        <p className="text-sm text-zinc-500">photo@example.com</p>
      </div>
    </div>
  )
}
