import Image from "next/image"
import Link from "next/link"

import type { NewsItem } from "@/app-pages/news/data"

export interface NewsDetailHeroProps {
  news: NewsItem
}

export function NewsDetailHero({ news }: NewsDetailHeroProps) {
  const title = news.detailTitle ?? news.title
  const category = news.category ?? "Turizm"
  const breadcrumbTitle = news.detailBreadcrumb ?? title

  return (
    <section data-node-id="276:1093" className="border border-[rgba(255,255,255,0.05)] bg-[linear-gradient(180deg,#14141f_0%,#1f1a38_50%,#332661_100%)] px-6 pb-16 pt-36 sm:px-10 lg:px-20 lg:pb-[100px] lg:pt-36">
      <div className="mx-auto flex max-w-[1252px] items-end">
        <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:gap-[clamp(64px,16.4vw,236px)]">
          <div className="w-full max-w-[568px]">
            <p className="font-sans text-[13px] leading-normal text-[#9999a6]">Ana səhifə / Xəbərlər / {breadcrumbTitle}</p>
            <span className="mt-[21px] inline-flex rounded-full bg-[#7366e5] px-3.5 py-1.5 font-sans text-[11px] font-semibold leading-normal tracking-[1.1px] text-white">{category}</span>
            <h1 className="mt-[21px] font-sans text-[38px] font-bold leading-[1.15] text-white sm:text-[46px]">{title}</h1>
          </div>
          <div className="flex w-full flex-col items-start gap-12 lg:w-[482px] lg:items-end lg:gap-[114px]">
            <p className="w-full max-w-[420px] text-left font-sans text-xs leading-[1.6] text-[#666673] lg:text-right">IATA qeydiyyatlı agentlik · 2000+ tərəfdaş · 7/24 əməliyyat dəstəyi</p>
            <Link href="/news" className="inline-flex items-center justify-center gap-4 rounded-full border border-white/20 bg-white/[0.08] py-[6px] pl-[6px] pr-8 font-sans text-lg font-medium leading-[1.5] text-white transition-colors hover:bg-white/[0.14]">
              <span className="relative size-11 shrink-0 overflow-hidden rounded-full"><Image src="/news/detail/hero-icon-circle.svg" alt="" fill sizes="44px" /><span className="absolute inset-0 flex items-center justify-center font-inter text-[22px] font-bold leading-none text-white">»</span></span>
              Bütün xəbərlər
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
