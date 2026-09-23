"use client"

import Image from "next/image"
import { Link } from "@/i18n/navigation"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import type { PublicPartner } from "@/features/services/partners/types"

export interface PartnersSectionProps {
  label: string
  dotImage: string
  actionText?: string
  actionUrl?: string
  partners: PublicPartner[]
}

export function PartnersSection({ label, dotImage, actionText, actionUrl, partners }: PartnersSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[100px]">
      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-2.5 px-6 sm:px-10 lg:px-20">
          <Image src={dotImage} alt="" width={8} height={8} />
          <p className="font-sans text-lg font-medium leading-[1.5] text-[#666673]">{label}</p>
        </div>

        {actionText && actionUrl ? (
          <Link href={actionUrl} className="hidden px-6 text-right font-sans text-lg font-semibold leading-[1.5] text-[#8059f2] hover:text-[#738cff] sm:px-10 lg:block lg:px-20">
            {actionText} ↗
          </Link>
        ) : null}

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="ml-0 items-center justify-between gap-8 px-6 sm:gap-12 sm:px-10 lg:gap-0 lg:px-20">
            {partners.map((partner) => (
              <CarouselItem key={partner.id} className="flex basis-[72%] items-center justify-center pl-0 sm:basis-[42%] lg:basis-1/4">
                <Image src={partner.logo} alt={partner.name} width={206} height={116} className="h-auto max-w-full object-contain" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {actionText && actionUrl ? (
          <Link href={actionUrl} className="block self-end px-6 text-right font-sans text-lg font-semibold leading-[1.5] text-[#8059f2] hover:text-[#738cff] sm:px-10 lg:hidden">
            {actionText} ↗
          </Link>
        ) : null}
      </div>
    </section>
  )
}
