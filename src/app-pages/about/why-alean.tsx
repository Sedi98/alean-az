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
    <section aria-labelledby="about-why-title" className="bg-[linear-gradient(183.15deg,#31255c_61.421%,#15112b_94.998%)] px-4 py-16 text-white sm:px-10 sm:py-20 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="flex items-center gap-2.5">
          <Image src={dotImage} alt="" width={8} height={8} />
          <p className="whitespace-nowrap font-[family-name:var(--font-hero-description)] text-lg font-medium leading-[1.5] text-[#9999a6] uppercase">{label}</p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 id="about-why-title" className="font-[family-name:var(--font-hero-title)] text-3xl font-bold leading-none sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="max-w-[700px] whitespace-pre-line font-[family-name:var(--font-hero-description)] text-base leading-[1.5] text-[#e6e6e6] sm:text-lg">{description}</p>
        </div>
        <div className="lg:hidden">
          <WhyAleanMobileCarousel cards={cards} />
        </div>

        <div className="hidden gap-[22px] lg:grid lg:h-[284px] lg:grid-cols-4 lg:items-center">
          {cards.map((card) => (
            <WhyAleanCard
              key={card.number}
              {...card}
              className="[&_h3]:font-medium [&_h3]:leading-[1.5] [&_article>div>div>p]:text-base [&_article>div>div>p]:leading-6"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
