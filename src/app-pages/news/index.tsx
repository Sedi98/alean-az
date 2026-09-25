import { NewsHero } from "./hero"
import { MediaSection } from "./media"
import { getTranslations } from "next-intl/server"
import type {
  PublicNewsCategory,
  PublicNewsList,
  PublicNewsPage,
} from "@/features/services/news/types"
import { Pagination } from "@/components/ui/pagination"

export interface NewsPageProps {
  page: PublicNewsPage
  categories: PublicNewsCategory[]
  news: PublicNewsList[]
  activeCategory?: string
  currentPage: number
  totalPages: number
  searchParams: Record<string, string | undefined>
}

export default async function NewsPage({ page, categories, news, activeCategory, currentPage, totalPages, searchParams }: NewsPageProps) {
  const t = await getTranslations("Common")
  const cards = news.map((item) => ({
    title: item.title,
    description: item.summary ?? "",
    image: item.cover_image ?? null,
    imageAlt: item.title,
    href: "/news/" + item.slug,
  }))

  return (
    <main className="min-h-screen bg-white">

      <NewsHero
        breadcrumb={`${t("home")} / ${t("news")}`}
        title={page.title ?? t("news")}
        description={page.subtitle ?? t("newsPageDescription")}
        metadata={t("trustLine")}
        actionText={t("servicesWithPossessive")}
        actionUrl="/services"
      />

      <MediaSection filters={categories} activeCategory={activeCategory} cards={cards} />
      <Pagination pathname="/news" page={currentPage} totalPages={totalPages} searchParams={searchParams} />
    </main>
  )
}
