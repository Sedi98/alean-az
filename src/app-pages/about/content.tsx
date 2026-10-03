import Image from "next/image"
import { SectionLabel } from "@/components/section-label"

interface AboutContentStat {
  value?: string
  label: string
  image?: string
  imageAlt?: string
}

export interface AboutContentProps {
  label: string
  dotImage: string
  title: string
  columns: string[]
  stats: AboutContentStat[]
  decorativeImageTop: string
  decorativeImageBottom: string
}

export function AboutContent({ label, title, columns, stats, decorativeImageTop, decorativeImageBottom }: AboutContentProps) {
  console.log(stats);
  
  return (
    <section aria-labelledby="about-content-title" className="relative isolate overflow-hidden bg-gradient-to-b from-[#332661] via-[#1f1a38] to-[#130f27] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-20 lg:py-[100px]">
      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="flex flex-col gap-[34px]">
          <SectionLabel>{label}</SectionLabel>

          <h2 id="about-content-title" className="max-w-[1100px] font-[family-name:var(--font-hero-title)] text-3xl font-medium leading-none text-white sm:text-4xl lg:text-5xl">{title}</h2>

          <div className="grid gap-6 font-[family-name:var(--font-hero-description)] text-base leading-[1.5] text-[#f0f0fd] sm:text-lg lg:grid-cols-2 lg:gap-16">
            {columns.map((column) => <p key={column} className="whitespace-pre-line">{column}</p>)}
          </div>
        </div>

        <div className="grid border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-[1.03fr_1fr_.87fr_1.07fr]">
          {stats.map((stat, index) => (
            <div key={`${stat.label}-${index}`} className={`min-h-[205px] border-b border-white/[0.08] py-9 sm:px-9 lg:border-b-0 lg:px-9 ${index < 2 ? "lg:border-r" : ""} ${index === 0 ? "lg:pl-0" : ""}`}>
              <div className={`flex h-full flex-col gap-6 font-[family-name:var(--font-hero-description)] ${stat.image ? "items-center text-center" : "items-start"}`}>
                {stat.image ? (
                  <Image src={stat.image} alt={stat.imageAlt ?? ""} width={123} height={79} className="h-[78.9px] w-[123px] object-contain object-center" />
                ) : (
                  <p className="bg-gradient-to-r from-[#738cff] via-[#8066f2] to-[#9959e5] bg-clip-text text-4xl font-semibold leading-none text-transparent sm:text-5xl">{stat.value}</p>
                )}
                <p className="whitespace-pre-line text-base leading-[1.5] text-[#80808c]">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-0 z-0 h-[335px] w-[233px] overflow-hidden opacity-50">
        <Image src={decorativeImageTop} alt="" width={233} height={335} className="absolute inset-0 h-full w-full" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-[348px] w-[338px] opacity-50">
        <Image src={decorativeImageBottom} alt="" fill sizes="338px" className="h-full w-full max-w-none object-contain object-left-top" />
      </div>
    </section>
  )
}
