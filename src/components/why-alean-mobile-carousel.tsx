"use client"

import { WhyAleanCard, type WhyAleanCardProps } from "@/components/why-alean-card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export function WhyAleanMobileCarousel({ cards }: { cards: WhyAleanCardProps[] }) {
  return (
    <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
      <CarouselContent className="ml-0 gap-5">
        {cards.map((card) => (
          <CarouselItem key={card.number} className="basis-[304px] pl-0">
            <WhyAleanCard {...card} className="h-[271px] w-[304px]" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
