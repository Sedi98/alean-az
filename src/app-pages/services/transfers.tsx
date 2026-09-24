import Image from "next/image"

import { Link } from "@/i18n/navigation"

export interface TransferCard {
  image: string
  alt: string
  title: string
  description: string
}

export interface TransfersSectionProps {
  category: string
  title: string
  description: string
  ctaText?: string
  ctaUrl?: string
  icon: string
  cards: TransferCard[]
}

export function TransfersSection({
  category,
  title,
  description,
  ctaText,
  ctaUrl,
  icon,
  cards,
}: TransfersSectionProps) {
  return (
    <section id="transfers" data-node-id="242:2470" className="scroll-mt-6 bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-8">
            <div className="flex w-full max-w-[847px] flex-col items-start gap-6">
              <p className="font-sans text-base font-medium leading-[1.5] text-[#6666ec]">{category}</p>
              <div className="flex w-full flex-col items-start gap-5">
                <div className="flex items-center gap-[21px]">
                  <Image src={icon} alt="" width={48} height={48} />
                  <h2 className="font-sans text-[28px] font-semibold leading-[1.25] text-[#14141a] sm:text-[36px]">
                    {title}
                  </h2>
                </div>
                <p className="font-sans text-base leading-[1.5] text-[#666673]">{description}</p>
              </div>
            </div>

            {ctaText && ctaUrl ? (
              <Link href={ctaUrl} className="font-sans text-sm font-semibold leading-normal text-[#2b2b63] hover:text-[#4848a8]">
                {ctaText} ↗
              </Link>
            ) : null}
          </div>

          <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-[41px]">
            {cards.map((card) => (
              <article key={card.title} className="flex flex-col gap-[30px]">
                <div className="relative h-[264px] w-full overflow-hidden rounded-2xl bg-[#ebebf0]">
                  <Image src={card.image} alt={card.alt} fill sizes="(max-width: 1024px) 100vw, 630px" className="object-cover" />
                </div>
                <div className="flex flex-col gap-2 font-sans">
                  <h3 className="text-lg font-semibold leading-normal text-[#14141a]">{card.title}</h3>
                  <p className="text-base leading-[1.55] text-[#737380]">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
