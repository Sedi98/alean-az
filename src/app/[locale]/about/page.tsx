import type { Metadata } from "next"

import AboutPage from "@/app-pages/about"

export const metadata: Metadata = {
  title: "Haqqımızda | Alean.az",
  description: "Alean.az haqqında məlumat əldə edin.",
}

export default function Page() {
  return <AboutPage />
}

