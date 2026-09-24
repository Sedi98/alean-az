import Image from "next/image"

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

export function AboutContent({ label, dotImage, title, columns, stats, decorativeImageTop, decorativeImageBottom }: AboutContentProps) {
  return (
    <section aria-labelledby="about-content-title" className="relative isolate overflow-hidden bg-[#0a0a0d] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-20 lg:py-[100px]">
      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="flex items-center gap-2.5">
          <Image src={dotImage} alt="" width={8} height={8} />
          <p className="font-sans text-lg font-semibold leading-[1.5] text-[#9999a6]">{label}</p>
        </div>

        <h2 id="about-content-title" className="max-w-[1100px] font-sans text-3xl font-medium leading-tight text-[#f0f0fd] sm:text-4xl lg:text-5xl">{title}</h2>

        <div className="grid gap-8 font-sans text-base leading-6 text-[#f0f0fd] lg:grid-cols-2 lg:gap-16">
          {columns.map((column) => <p key={column}>{column}</p>)}
        </div>

        <div className="grid border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={`${stat.label}-${index}`} className="min-h-[205px] border-b border-white/[0.08] py-8 sm:px-9 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0">
              <div className="flex h-full flex-col gap-6">
                {stat.image ? (
                  <Image src={stat.image} alt={stat.imageAlt ?? ""} width={123} height={79} className="h-[78.9px] w-[123px] object-contain object-left" />
                ) : (
                  <p className="bg-gradient-to-r from-[#738cff] via-[#8066f2] to-[#9959e5] bg-clip-text font-inter text-[52px] font-bold leading-normal text-transparent">{stat.value}</p>
                )}
                <p className="whitespace-pre-line font-inter text-[15px] leading-[1.55] text-[#80808c]">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-0 z-0 h-[348px] w-[338px] opacity-20">
        <Image src={decorativeImageTop} alt="" fill sizes="338px" className="h-full w-full max-w-none object-contain object-left-top" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-[348px] w-[338px] opacity-20">
        <Image src={decorativeImageBottom} alt="" fill sizes="338px" className="h-full w-full max-w-none object-contain object-left-top" />
      </div>
    </section>
  )
}
