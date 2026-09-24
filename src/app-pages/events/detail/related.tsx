import Image from "next/image"
import { useTranslations } from "next-intl"

import { EventGridCard } from "@/components/event-grid-card"
import type { PublicEventList } from "@/features/services/events/types"

export function RelatedEvents({ events, locale = "az" }: { events: PublicEventList[]; locale?: string }) {
  const t = useTranslations("Common")
  return (
    <section data-node-id="273:1041" className="bg-[#f7f7fa] px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="flex items-center gap-2.5"><Image src="/events/detail/related-dot.svg" alt="" width={8} height={8} /><h2 className="font-sans text-[13px] font-medium tracking-[1.95px] text-[#666673]">{t("otherEvents")}</h2></div>
        <div className="grid gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-6">{events.map((event) => <EventGridCard key={event.slug} slug={event.slug} image={event.cover_image ?? "/events/tourism-forum.jpg"} category={event.category.short_name} date={event.date} title={event.title} location={`${event.venue}, ${event.city}`} />)}</div>
      </div>
    </section>
  )
}
