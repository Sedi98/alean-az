import { Button } from "@/components/ui/button"
import { NewsCard, type NewsCardProps } from "@/components/news-card"

export interface MediaSectionProps {
  filters: string[]
  cards: NewsCardProps[]
}

export function MediaSection({ filters, cards }: MediaSectionProps) {
  return (
    <section data-node-id="266:893" className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {filters.map((filter) => (
            <Button key={filter} type="button" variant="outline" className="h-auto rounded-full border-[#d0d0f9] bg-transparent px-4 py-[10px] font-sans text-base font-medium leading-[1.5] text-[#4848a8] hover:bg-[#f0f0fd] hover:text-[#4848a8]">
              {filter}
            </Button>
          ))}
        </div>
        <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => <NewsCard key={`${card.title}-${index}`} {...card} />)}
        </div>
      </div>
    </section>
  )
}
