export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  if (src.startsWith("https://picsum.photos")) {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  return src
}
