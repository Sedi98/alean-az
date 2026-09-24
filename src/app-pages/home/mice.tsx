import Image from "next/image"
import { Link } from "@/i18n/navigation"

import { EventCard, type EventCardProps } from "@/components/event-card"
import { MiceMobileCarousel } from "@/components/mice-mobile-carousel"

export interface MiceSectionProps {
  label: string
  dotImage: string
  title: string
  description: string
  actionText: string
  actionUrl: string
  cards: EventCardProps[]
  note: string
}

export function MiceSection({
  label,
  dotImage,
  title,
  description,
  actionText,
  actionUrl,
  cards,
  note,
}: MiceSectionProps) {
  return (
    <section aria-labelledby="home-mice-title" className="bg-[#0a0a0d] px-4 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="flex items-center gap-2.5">
          <Image src={dotImage} alt="" width={8} height={8} />
          <p className="font-sans text-base font-medium leading-[1.5] text-[#9999a6] sm:text-lg">{label}</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 id="home-mice-title" className="font-sans text-3xl font-semibold leading-tight text-[#f0f0fd] sm:text-4xl lg:text-5xl">{title}</h2>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <p className="max-w-[700px] font-sans text-base font-normal leading-6 text-[#80808c]">{description}</p>
            <Link href={actionUrl} className="hidden font-sans text-lg font-semibold leading-[1.5] text-[#f2e002] hover:text-[#f2e002]/80 lg:block lg:w-[560px] lg:text-right">
              {actionText} ↗
            </Link>
          </div>
        </div>

        <div className="lg:hidden">
          <MiceMobileCarousel cards={cards} />
        </div>

        <div className="hidden gap-[22px] lg:grid lg:grid-cols-4">
          {cards.map((card) => <EventCard key={card.title} {...card} />)}
        </div>

        <Link href={actionUrl} className="-mt-1 block self-end font-sans text-lg font-semibold leading-[1.5] text-[#f2e002] hover:text-[#f2e002]/80 lg:hidden">
          {actionText} ↗
        </Link>

        <p className="hidden max-w-[700px] font-inter text-base leading-[1.65] text-[#fefce6] lg:block">{note}</p>
      </div>
    </section>
  )
}
