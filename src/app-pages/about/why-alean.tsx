import Image from "next/image"

import { WhyAleanCard, type WhyAleanCardProps } from "@/components/why-alean-card"
import { WhyAleanMobileCarousel } from "@/components/why-alean-mobile-carousel"

export interface WhyAleanSectionProps {
  label: string
  dotImage: string
  title: string
  description: string
  cards: WhyAleanCardProps[]
}

export function WhyAleanSection({ label, dotImage, title, description, cards }: WhyAleanSectionProps) {
  return (
    <section className="bg-[#0a0a0d] px-4 py-16 text-white sm:px-10 sm:py-20 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="flex items-center gap-2.5">
          <Image src={dotImage} alt="" width={8} height={8} />
          <p className="font-sans text-[13px] font-medium tracking-[1.95px] text-[#80808c]">{label}</p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-sans text-3xl font-semibold leading-none sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="max-w-[700px] whitespace-pre-line font-sans text-base leading-6 text-[#80808c]">{description}</p>
        </div>
        <div className="lg:hidden">
          <WhyAleanMobileCarousel cards={cards} />
        </div>

        <div className="hidden gap-4 lg:grid lg:grid-cols-4">
          {cards.map((card) => <WhyAleanCard key={card.number} {...card} />)}
        </div>
      </div>
    </section>
  )
}
