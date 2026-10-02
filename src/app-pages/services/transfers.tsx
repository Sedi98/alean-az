import Image from "next/image"

import { Link } from "@/i18n/navigation"
import { SectionLabel } from "@/components/section-label"

export interface TransferCard {
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
    <section id="transfers" data-node-id="242:2470" className="scroll-mt-6 bg-transparent px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start">
        <div className="flex w-full flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-8">
            <div className="flex w-full max-w-[847px] flex-col items-start gap-6">
              <SectionLabel>{category}</SectionLabel>
              <div className="flex w-full flex-col items-start gap-5">
                <div className="flex items-center gap-[21px]">
                  <Image src={icon} alt="" width={48} height={48} />
                  <h2 className="font-sans text-[28px] font-semibold leading-[1.25] text-white sm:text-[36px]">
                    {title}
                  </h2>
                </div>
                <p className="font-sans text-base leading-[1.5] text-[#e6e6e6]">{description}</p>
              </div>
            </div>

            {ctaText && ctaUrl ? (
              <Link href={ctaUrl} className="font-sans text-sm font-semibold leading-normal text-[#b9b9f6] hover:text-white">
                {ctaText} ↗
              </Link>
            ) : null}
          </div>

          <div className="grid w-full gap-[22px] sm:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => (
              <article
                key={card.title}
                className="relative h-[170px] overflow-hidden rounded-2xl border border-[rgba(115,140,255,0.12)] bg-[#14141a] p-8 font-sans"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-0 w-[31%] bg-gradient-to-l from-[rgba(143,108,237,0.3)] via-[rgba(106,107,240,0.2)] to-[rgba(20,20,25,0)]"
                />
                <div className="relative z-10 flex flex-col gap-[6px] leading-[1.5]">
                  <h3 className="text-xl font-medium text-[#f0f0fd]">{card.title}</h3>
                  <p className="text-base text-[#737380]">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
