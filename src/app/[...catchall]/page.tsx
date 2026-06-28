import { PLASMIC } from "@/plasmic-init"
import {
  PlasmicComponent,
  PlasmicRootProvider,
  ComponentRenderData,
} from "@plasmicapp/loader-nextjs"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  if (!process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID) {
    return [{ catchall: ["_placeholder"] }]
  }
  try {
    const { PLASMIC } = await import("@/plasmic-init")
    const pages = await PLASMIC.fetchPages()
    return pages
      .filter((page: { path: string }) => page.path !== "/")
      .map((page: { path: string }) => ({
        catchall: page.path.split("/").filter(Boolean),
      }))
  } catch {
    return [{ catchall: ["_placeholder"] }]
  }
}

export const dynamicParams = false

interface Props {
  params: Promise<{ catchall: string[] }>
}

export default async function CatchAllPage({ params }: Props) {
  const { catchall } = await params

  if (catchall[0] === "_placeholder" || !PLASMIC) {
    notFound()
  }

  const path = "/" + catchall.join("/")

  let plasmicData: ComponentRenderData | null = null
  try {
    plasmicData = await PLASMIC.maybeFetchComponentData(path)
  } catch {
    notFound()
  }

  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    notFound()
  }

  const pageMeta = plasmicData.entryCompMetas[0]

  return (
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  )
}
