import Image from "next/image"
import { useTranslations } from "next-intl"

import { EventGridCard } from "@/components/event-grid-card"
import type { EventGridCardProps } from "@/components/event-grid-card"

export interface EventsGridProps {
  events: EventGridCardProps[]
}

export function EventsGrid({ events, locale = "az" }: EventsGridProps & { locale?: string }) {
  const t = useTranslations("Common")
  return (
    <section data-node-id="251:228" className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="flex items-center gap-2.5">
          <Image src="/events/section-dot.svg" alt="" width={8} height={8} />
          <h2 className="font-sans text-[13px] font-medium leading-normal tracking-[1.95px] text-[#666673]">{t("eventsLabel")}</h2>
        </div>
        <div className="grid gap-x-5 gap-y-10 md:grid-cols-2 lg:gap-y-6 lg:grid-cols-3">
          {events.map((event) => <EventGridCard key={event.slug} {...event} />)}
        </div>
      </div>
    </section>
  )
}
