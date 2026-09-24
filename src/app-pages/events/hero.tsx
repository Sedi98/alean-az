import { EventCard, type EventCardProps } from "@/components/event-card"
import { EventsMobileCarousel } from "@/components/events-mobile-carousel"

export interface EventsHeroProps {
  breadcrumb: string
  title: string
  cards: EventCardProps[]
}

export function EventsHero({ breadcrumb, title, cards }: EventsHeroProps) {
  return (
    <section
      data-node-id="252:3598"
      className="border border-[rgba(255,255,255,0.05)] bg-[linear-gradient(180deg,#14141f_0%,#1f1a38_50%,#332661_100%)] px-4 py-16 sm:px-10 lg:min-h-[560px] lg:px-20 lg:py-[100px]"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
        <div className="flex w-full max-w-[249px] flex-col gap-4">
          <p className="font-sans text-base font-medium leading-[1.5] text-[#9999a6]">{breadcrumb}</p>
          <h1 className="font-[family-name:var(--font-hero-title)] text-[40px] font-semibold leading-none text-white sm:text-[48px]">{title}</h1>
        </div>
        <div className="lg:hidden">
          <EventsMobileCarousel cards={cards} />
        </div>

        <div className="hidden gap-5 lg:grid lg:grid-cols-4">
          {cards.map((card) => <EventCard key={card.title} {...card} />)}
        </div>
      </div>
    </section>
  )
}
