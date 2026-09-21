"use client"

import { NewsCard, type NewsCardProps } from "@/components/news-card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export function NewsMobileCarousel({ cards }: { cards: NewsCardProps[] }) {
  return (
    <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
      <CarouselContent className="ml-0 gap-5">
        {cards.map((card) => (
          <CarouselItem key={card.title} className="basis-[304px] pl-0">
            <NewsCard {...card} className="h-[420px] w-[304px]" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
