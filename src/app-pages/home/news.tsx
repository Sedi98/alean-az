import Image from "next/image"
import { Link } from "@/i18n/navigation"

import { NewsCard, type NewsCardProps } from "@/components/news-card"
import { NewsMobileCarousel } from "@/components/news-mobile-carousel"

export interface NewsSectionProps {
  label: string
  dotImage: string
  title: string
  description: string
  actionText: string
  actionUrl: string
  cards: NewsCardProps[]
}

export function NewsSection({ label, dotImage, title, description, actionText, actionUrl, cards }: NewsSectionProps) {
  return (
    <section aria-labelledby="home-news-title" className="bg-white px-4 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="flex items-center gap-2.5">
          <Image src={dotImage} alt="" width={8} height={8} />
          <p className="font-sans text-base font-medium leading-[1.5] text-[#666673] sm:text-lg">{label}</p>
        </div>
        <h2 id="home-news-title" className="font-inter text-4xl font-bold leading-tight text-[#2b2b63] sm:text-5xl lg:text-[56px]">{title}</h2>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <p className="max-w-[700px] font-sans text-base leading-6 text-[#80808c]">{description}</p>
          <Link href={actionUrl} className="hidden font-sans text-lg font-semibold leading-[1.5] text-[#8059f2] hover:text-[#738cff] lg:block lg:w-[560px] lg:text-right">
            {actionText} ↗
          </Link>
        </div>

        <div className="lg:hidden">
          <NewsMobileCarousel cards={cards} />
        </div>

        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {cards.map((card) => <NewsCard key={card.title} {...card} />)}
        </div>

        <Link href={actionUrl} className="-mt-1 block self-end font-sans text-lg font-semibold leading-[1.5] text-[#8059f2] hover:text-[#738cff] lg:hidden">
          {actionText} ↗
        </Link>
      </div>
    </section>
  )
}
