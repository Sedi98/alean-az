import type { Metadata } from "next"

import PartnersPage from "@/app-pages/partners"
import { getPartners, getPartnersPage } from "@/features/services/partners/api"

export const metadata: Metadata = {
  title: "Partners | Alean.az",
  description: "Alean.az partner network.",
}

export default async function Page({ searchParams }: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ page?: string }>
}) {
  const query = await searchParams
  const pageNumber = query.page ? Number(query.page) : 1
  const currentPage = Number.isFinite(pageNumber) && pageNumber > 0 ? Math.floor(pageNumber) : 1
  const limit = 9
  const [page, partners] = await Promise.all([
    getPartnersPage(),
    getPartners({ limit, offset: (currentPage - 1) * limit }),
  ])

  return <PartnersPage page={page} partners={partners.results} currentPage={currentPage} totalPages={Math.max(1, Math.ceil(partners.count / limit))} />
}
