import { NewsHero } from "./hero"
import { MediaSection } from "./media"
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

export default function NewsPage({ page, categories, news, activeCategory, currentPage, totalPages, searchParams }: NewsPageProps) {
  const cards = news.map((item) => ({
    title: item.title,
    description: item.summary ?? "",
    image: item.cover_image ?? "/news/news-1.jpeg",
    imageAlt: item.title,
    href: "/news/" + item.slug,
  }))

  return (
    <main className="min-h-screen bg-white">

      <NewsHero
        breadcrumb="Ana səhifə / Xəbərlər"
        title={page.title ?? "Xəbərlər"}
        description={page.subtitle ?? "Turizm sektorundakı son yeniliklər, ALEAN-ın tədbirləri,\nsəyahət məsləhətləri və sektora dair analitik yazılar."}
        metadata="IATA qeydiyyatlı agentlik · 2000+ tərəfdaş · 7/24 əməliyyat dəstəyi"
        actionText="Xidmətlərimiz"
        actionUrl="/services"
      />

      <MediaSection filters={categories} activeCategory={activeCategory} cards={cards} />
      <Pagination pathname="/news" page={currentPage} totalPages={totalPages} searchParams={searchParams} />
    </main>
  )
}
