const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function imagePath(src: string): string {
  if (src.startsWith('http')) return src
  const clean = src.startsWith('/') ? src : `/${src}`
  return `${basePath}${clean}`
}
