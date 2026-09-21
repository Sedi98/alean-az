"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { EventCard, type EventCardProps } from "@/components/event-card"

export function MiceMobileCarousel({ cards }: { cards: EventCardProps[] }) {
  return (
    <Carousel
      opts={{ align: "start", dragFree: true }}
      className="w-full"
    >
      <CarouselContent className="ml-0 gap-5">
        {cards.map((card) => (
          <CarouselItem key={card.title} className="basis-[304px] pl-0">
            <EventCard {...card} className="h-[170px] w-[304px]" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
