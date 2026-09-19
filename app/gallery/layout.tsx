import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Gallery — 10 years of GlitzFair",
  description: "Ten years of GlitzFair photographs, from the first April in 2016 through the anniversary year.",
}

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children
}
