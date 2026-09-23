import type { Metadata } from "next"

import NewsPage from "@/app-pages/news"

export const metadata: Metadata = {
  title: "News | Alean.az",
  description: "Alean.az turizm xəbərləri və yenilikləri.",
}

export default function Page() {
  return <NewsPage />
}
