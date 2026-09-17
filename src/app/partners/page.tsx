import type { Metadata } from "next"

import PartnersPage from "@/app-pages/partners"

export const metadata: Metadata = {
  title: "Partners | Alean.az",
  description: "Alean.az partner network.",
}

export default function Page() {
  return <PartnersPage />
}
