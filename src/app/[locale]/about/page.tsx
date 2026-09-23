import type { Metadata } from "next"

import AboutPage from "@/app-pages/about"
import { getAbout } from "@/features/services/about/api"
import { getPartners } from "@/features/services/partners/api"

export const metadata: Metadata = {
  title: "Haqqımızda | Alean.az",
  description: "Alean.az haqqında məlumat əldə edin.",
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  await params
  const [about, partners] = await Promise.all([
    getAbout(),
    getPartners({ limit: 4 }),
  ])
  return <AboutPage about={about} partners={partners.results} />
}
