import Image from "next/image"
import { SectionLabel } from "@/components/section-label"

export interface AboutStat {
  value?: string
  label: string
  image?: string
  imageAlt?: string
}

export interface AboutSectionProps {
  label: string
  title: string
  stats: AboutStat[]
  dotImage: string
}

export function AboutSection({ label, title, stats, dotImage }: AboutSectionProps) {
  return (
    <section aria-labelledby="home-about-title" className="bg-gradient-to-b from-[#130f27] via-[#1f1a38] via-50% to-[#332661] px-4 py-16 text-white sm:px-10 sm:py-16 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 sm:gap-12">
        <div className="flex flex-col gap-8 sm:contents">
          <div className="hidden sm:block">
            <SectionLabel>{label}</SectionLabel>
          </div>
          <div className="flex items-center gap-2.5 sm:hidden">
            <Image src={dotImage} alt="" width={8} height={8} />
            <p className="whitespace-nowrap font-[family-name:var(--font-hero-description)] text-lg font-normal leading-[1.5] text-[#9999a6] uppercase">
              {label}
            </p>
          </div>

          <h2 id="home-about-title" className="max-w-[1100px] font-[family-name:var(--font-hero-title)] text-2xl font-medium leading-[1.5] text-white sm:font-sans sm:text-4xl sm:leading-tight sm:text-[#f0f0fd] lg:text-5xl">
            {title}
          </h2>
        </div>

        <div className="flex w-full flex-col items-center sm:grid sm:border-t sm:border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const mobileSize = stat.image
              ? "h-[149px] py-[10px]"
              : index === 0
                ? "h-[171px] py-8"
                : "h-[169px] py-8"

            return (
              <div
                key={`${stat.label}-${index}`}
                className={`flex w-full items-center justify-center border-b-0 px-4 text-center sm:block sm:h-auto sm:min-h-[205px] sm:border-b sm:border-white/[0.08] sm:border-r sm:px-9 sm:py-8 sm:text-left lg:border-b-0 lg:first:pl-0 lg:last:border-r-0 ${mobileSize}`}
              >
                <div className={`flex flex-col items-center sm:h-full sm:items-start sm:gap-6 ${stat.image || index === 0 ? "gap-6" : "gap-[10px]"}`}>
                  {stat.image ? (
                    <Image
                      src={stat.image}
                      alt={stat.imageAlt ?? ""}
                      width={123}
                      height={79}
                      className="h-[78.9px] w-[123px] object-contain object-center sm:object-left"
                    />
                  ) : (
                    <p className="bg-gradient-to-r from-[#738cff] via-[#8066f2] to-[#9959e5] bg-clip-text font-[family-name:var(--font-hero-description)] text-[36px] font-semibold leading-[1.25] text-transparent sm:font-inter sm:text-[52px] sm:font-bold sm:leading-normal">
                      {stat.value}
                    </p>
                  )}
                  <p className="max-w-[190px] whitespace-pre-line text-center font-[family-name:var(--font-hero-description)] text-base leading-[1.5] text-[#80808c] sm:text-left sm:font-inter sm:text-[15px] sm:leading-[1.55]">
                    {stat.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
