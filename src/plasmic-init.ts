import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional"
import { HeaderSection } from "@/components/plasmic/HeaderSection"
import { FooterSection } from "@/components/plasmic/FooterSection"
import { PhotoGrid } from "@/components/plasmic/PhotoGrid"
import { HeroImage } from "@/components/plasmic/HeroImage"

const projectId = process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID || ""
const projectToken = process.env.NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN || ""

export const PLASMIC = initPlasmicLoader({
  projects: projectId && projectToken ? [
    {
      id: projectId,
      token: projectToken,
    },
  ] : [],
  preview: process.env.NODE_ENV === "development",
})

if (typeof window !== "undefined") {
  PLASMIC.registerComponent(HeaderSection, {
    name: "HeaderSection",
    description: "Site header with navigation",
    props: {
      siteName: {
        type: "string",
        defaultValue: "PHOTO",
      },
    },
  })

  PLASMIC.registerComponent(FooterSection, {
    name: "FooterSection",
    description: "Site footer with copyright",
    props: {
      copyright: {
        type: "string",
        defaultValue: "Photo",
      },
    },
  })

  PLASMIC.registerComponent(PhotoGrid, {
    name: "PhotoGrid",
    description: "Grid of photos",
    props: {
      photos: {
        type: "array",
        defaultValue: [],
        itemType: {
          type: "object",
          fields: {
            src: { type: "imageUrl", defaultValue: "" },
            title: { type: "string", defaultValue: "" },
          },
        },
      },
      columns: {
        type: "choice",
        options: [
          { label: "1", value: 1 },
          { label: "2", value: 2 },
          { label: "3", value: 3 },
          { label: "4", value: 4 },
        ],
        defaultValue: 3,
      },
    },
  })

  PLASMIC.registerComponent(HeroImage, {
    name: "HeroImage",
    description: "Large hero image with optional title",
    props: {
      src: { type: "imageUrl", defaultValue: "" },
      title: { type: "string", defaultValue: "" },
      subtitle: { type: "string", defaultValue: "" },
    },
  })
}
