import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import NewsPage from "@/app-pages/news"
import { getNews, getNewsCategories, getNewsPage } from "@/features/services/news/api"
import { createPageMetadata } from "@/lib/seo"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({ params, searchParams }: NewsPageRouteProps): Promise<Metadata> {
  const { locale } = await params
  const query = await searchParams
  const t = await getTranslations({ locale, namespace: "Seo" })
  return createPageMetadata({
    locale: locale as Locale,
    path: "news",
    title: t("newsTitle"),
    description: t("newsDescription"),
    noIndex: Boolean(query.search || query.category || query.page),
  })
}

interface NewsPageRouteProps {
  params: Promise<{ locale: string }>
  searchParams: Promise<{
    category?: string
    search?: string
    page?: string
  }>
}

export default async function Page({ searchParams }: NewsPageRouteProps) {
  const query = await searchParams
  const pageNumber = query.page ? Number(query.page) : 1
  const currentPage = Number.isFinite(pageNumber) && pageNumber > 0 ? Math.floor(pageNumber) : 1
  const limit = 9
  const [newsPage, categories, news] = await Promise.all([
    getNewsPage(),
    getNewsCategories(),
    getNews({
      category: query.category,
      search: query.search,
      limit,
      offset: (currentPage - 1) * limit,
    }),
  ])

  return (
    <NewsPage
      page={newsPage}
      categories={categories}
      news={news.results}
      activeCategory={query.category}
      currentPage={currentPage}
      totalPages={Math.max(1, Math.ceil(news.count / limit))}
      searchParams={{ category: query.category, search: query.search }}
    />
  )
}
