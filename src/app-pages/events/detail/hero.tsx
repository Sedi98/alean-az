import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { normalizeSlug } from "@/lib/routes"

import type { PublicEventDetail } from "@/features/services/events/types"

export interface EventDetailHeroProps {
  event: PublicEventDetail
  locale?: string
}

function CtaLink({ href, children, light = false }: { href: string; children: string; light?: boolean }) {
  return (
    <Link href={href} className={`inline-flex items-center justify-center gap-4 rounded-full py-[6px] pl-[6px] pr-8 font-sans text-lg font-medium leading-[1.5] transition-opacity hover:opacity-85 ${light ? "bg-[#f2e002] text-[#0f0f14]" : "border border-white/20 bg-white/[0.08] text-white"}`}>
      <span className="relative size-11 shrink-0 overflow-hidden rounded-full">
        <Image src={light ? "/events/detail/hero-icon-light.svg" : "/events/detail/hero-icon-dark.svg"} alt="" fill sizes="44px" />
        <span className={`absolute inset-0 flex items-center justify-center font-inter text-[22px] font-bold leading-none ${light ? "text-[#f2e002]" : "text-white"}`}>»</span>
      </span>
      {children}
    </Link>
  )
}

export async function EventDetailHero({ event, locale = "en" }: EventDetailHeroProps) {
  const t = await getTranslations("Common")
  return (
    <section data-node-id="258:307" className="relative min-h-[420px] overflow-hidden bg-[linear-gradient(180deg,#14141f_0%,#1f1a38_50%,#332661_100%)] px-6 py-8 sm:px-10 lg:px-20 lg:pt-[100px]">
      <div className="mx-auto flex  max-w-[1266px] items-center">
        <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:items-end lg:gap-[clamp(64px,11vw,162px)]">
          <div className="w-full max-w-[583px]">
            <p className="font-sans text-[13px] leading-normal text-[#9999a6]">{t("home")} / {t("events")} / {event.title}</p>
            <span className="mt-[21px] inline-flex rounded-full bg-[#7366e5] px-3.5 py-1.5 font-sans text-[11px] font-semibold leading-normal tracking-[1.1px] text-white">{event.category.short_name}</span>
            <h1 className="mt-[21px] whitespace-pre-line font-[family-name:var(--font-hero-title)] text-[40px] font-semibold leading-none text-white sm:text-[48px]">{event.title}</h1>
            <p className="mt-6 font-sans text-sm font-medium leading-normal text-[#bfbfcc]">📅 {event.date}   ·   📍 {event.venue}, {event.city}   ·   ⏱ {event.start_time}{event.end_time ? ` – ${event.end_time}` : ""}</p>
          </div>
          <div className="flex w-full flex-col items-start gap-12 lg:w-[482px] lg:items-end lg:gap-[114px]">
            <p className="w-full max-w-[420px] text-left font-sans text-xs leading-[1.6] text-[#666673] lg:text-right">{t("trustLine")}</p>
            <div className="flex w-full flex-wrap gap-5 lg:justify-end">
              <CtaLink href="/services">{t("servicesWithPossessive")}</CtaLink>
              {event.can_register ? <CtaLink href={`/events/${normalizeSlug(event.slug)}/registration`} light>{t("registration")}</CtaLink> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
