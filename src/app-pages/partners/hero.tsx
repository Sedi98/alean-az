import Image from "next/image"
import { Link } from "@/i18n/navigation"

export interface PartnersHeroProps {
  breadcrumb: string
  eyebrow: string
  title: string
  description: string
  metadata: string
  actionText: string
  actionUrl: string
}

export function PartnersHero({ breadcrumb, eyebrow, title, description, metadata, actionText, actionUrl }: PartnersHeroProps) {
  return (
    <section
      data-node-id="242:2479"
      className="relative min-h-[461px] overflow-hidden border border-[rgba(255,255,255,0.05)] bg-[linear-gradient(180deg,#14141f_0%,#1f1a38_50%,#332661_100%)]"
    >
      <div className="relative mx-auto flex min-h-[461px] max-w-[1440px] items-end px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
        <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:items-end lg:gap-[clamp(64px,18vw,260px)]">
          <div className="w-full max-w-[539px]">
            <div className="flex flex-col gap-[19px] font-sans text-sm leading-[1.25] text-[#737380]">
              <p>{breadcrumb}</p>
              <p>{eyebrow}</p>
            </div>
            <h1 className="mt-[22px] font-sans text-[40px] font-semibold leading-none text-[#f0f0fd] sm:text-[48px]">{title}</h1>
            <p className="mt-[22px] whitespace-pre-line font-sans text-base leading-[1.5] text-[#d0d0f9] sm:text-lg">{description}</p>
          </div>

          <div className="flex w-full flex-col items-start gap-12 lg:w-[482px] lg:items-end lg:gap-[114px]">
            <p className="w-full max-w-[420px] text-left font-sans text-xs leading-[1.6] text-[#666673] lg:text-right">{metadata}</p>
            <Link
              href={actionUrl}
              className="inline-flex items-center justify-center gap-4 rounded-full border border-white/20 bg-white/[0.08] py-[6px] pl-[6px] pr-8 font-sans text-lg font-medium leading-[1.5] text-white transition-colors hover:bg-white/[0.14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="relative size-11 shrink-0 overflow-hidden rounded-full">
                <Image src="/partners/icon-circle.svg" alt="" fill sizes="44px" />
                <span className="absolute inset-0 flex items-center justify-center font-inter text-[22px] font-bold leading-none text-white">»</span>
              </span>
              {actionText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
