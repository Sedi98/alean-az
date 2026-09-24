import { Link } from "@/i18n/navigation"
import { NewsCard, type NewsCardProps } from "@/components/news-card"
import type { PublicNewsCategory } from "@/features/services/news/types"
import { getTranslations } from "next-intl/server"

export interface MediaSectionProps {
  filters: PublicNewsCategory[]
  activeCategory?: string
  cards: NewsCardProps[]
}

export async function MediaSection({ filters, activeCategory, cards }: MediaSectionProps) {
  const t = await getTranslations("Common")
  return (
    <section data-node-id="266:893" className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10">
        <h2 className="sr-only">{t("news")}</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {filters.map((filter) => (
            <Link
              key={filter.slug}
              href={{ pathname: "/news", query: { category: filter.slug } }}
              aria-current={activeCategory === filter.slug ? "page" : undefined}
              className="inline-flex h-auto items-center justify-center rounded-full border border-[#d0d0f9] bg-transparent px-4 py-[10px] font-sans text-base font-medium leading-[1.5] text-[#4848a8] transition-colors hover:bg-[#f0f0fd] hover:text-[#4848a8] aria-[current=page]:bg-[#4848a8] aria-[current=page]:text-white"
            >
              {filter.name}
            </Link>
          ))}
        </div>
        <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => <NewsCard key={`${card.title}-${index}`} {...card} />)}
        </div>
      </div>
    </section>
  )
}
