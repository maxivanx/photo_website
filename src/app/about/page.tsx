export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-serif tracking-wide mb-10 text-center">
        About
      </h1>

      <div className="space-y-6 text-sm text-[#a0a0a0] leading-relaxed">
        <p>
          一名热爱摄影的创作者，专注于风光、人像和街拍。
        </p>
        <p>
          摄影让我学会了放慢脚步，用心观察身边的世界。
        </p>
      </div>

      <div className="mt-16 pt-10 border-t border-[#3a3a3a]">
        <h2 className="text-sm font-serif tracking-wide text-[#e8e8e8] mb-6">Equipment</h2>
        <ul className="space-y-2 text-sm text-[#888]">
          <li>Sony A7IV</li>
          <li>FE 24-70mm f/2.8 GM II</li>
          <li>FE 85mm f/1.4 GM</li>
        </ul>
      </div>

      <div className="mt-10 pt-10 border-t border-[#3a3a3a]">
        <h2 className="text-sm font-serif tracking-wide text-[#e8e8e8] mb-6">Contact</h2>
        <p className="text-sm text-[#888]">photo@example.com</p>
      </div>
    </div>
  )
}
