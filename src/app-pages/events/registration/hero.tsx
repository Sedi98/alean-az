import Image from "next/image"
import { Link } from "@/i18n/navigation"

import type { EventGridCardProps } from "@/components/event-grid-card"

export function RegistrationHero({ event }: { event: EventGridCardProps }) {
  return (
    <section data-node-id="318:704" className="relative  overflow-hidden bg-[linear-gradient(180deg,#14141f_0%,#1f1a38_50%,#332661_100%)] px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex  max-w-[1280px] items-end">
        <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:items-end lg:gap-[175px]">
          <div className="w-full max-w-[581px]">
            <p className="font-sans text-xs leading-normal text-[#737380]">Ana səhifə / Tədbirlər / {event.title} / Qeydiyyat</p>
            <span className="mt-[21px] inline-flex rounded-full bg-[#7366e5] px-3.5 py-1.5 font-sans text-[11px] font-semibold tracking-[1.1px] text-white">{event.category}</span>
            <h1 className="mt-[21px] whitespace-pre-line font-sans text-[40px] font-semibold leading-none text-white sm:text-[48px]">{event.title.replace(" Turizm ", " Turizm\n")}</h1>
            <p className="mt-6 font-sans text-sm font-medium text-[#bfbfcc]">📅 15 Mart 2026   ·   📍 {event.location}   ·   ⏱ 09:00 – 18:00</p>
          </div>
          <div className="flex w-full flex-col items-start gap-12 lg:w-[524px] lg:items-end lg:gap-[58px]">
            <div className="flex flex-col items-center gap-[6px] rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-5">
              <strong className="bg-gradient-to-r from-[#738cff] to-[#8059f2] bg-clip-text font-sans text-4xl font-bold text-transparent">47</strong>
              <span className="font-sans text-[13px] text-[#8c8c99]">yer qalıb</span>
            </div>
            <Link href="/events" className="inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/[0.08] py-[6px] pl-[6px] pr-8 font-sans text-lg font-medium text-white hover:bg-white/[0.14]">
              <span className="relative size-11 overflow-hidden rounded-full"><Image src="/events/detail/hero-icon-dark.svg" alt="" fill sizes="44px" /><span className="absolute inset-0 flex items-center justify-center font-inter text-[22px] font-bold">»</span></span>
              Tədbirlər
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
