import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import PartnersPage from "@/app-pages/partners"
import { getPartners, getPartnersPage } from "@/features/services/partners/api"
import { createPageMetadata } from "@/lib/seo"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({ params, searchParams }: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ page?: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const query = await searchParams
  const t = await getTranslations({ locale, namespace: "Seo" })
  return createPageMetadata({
    locale: locale as Locale,
    path: "partners",
    title: t("partnersTitle"),
    description: t("partnersDescription"),
    noIndex: Boolean(query.page),
  })
}

export default async function Page({ params, searchParams }: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ page?: string }>
}) {
  const { locale } = await params
  const query = await searchParams
  const pageNumber = query.page ? Number(query.page) : 1
  const currentPage = Number.isFinite(pageNumber) && pageNumber > 0 ? Math.floor(pageNumber) : 1
  const limit = 9
  const [page, partners] = await Promise.all([
    getPartnersPage({ lang: locale as Locale }),
    getPartners({ lang: locale as Locale, limit, offset: (currentPage - 1) * limit }),
  ])

  return <PartnersPage page={page} partners={partners.results} currentPage={currentPage} totalPages={Math.max(1, Math.ceil(partners.count / limit))} />
}
