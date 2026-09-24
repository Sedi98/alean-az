import Image from "next/image"

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
    <section aria-labelledby="home-about-title" className="bg-[#0a0a0d] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <Image src={dotImage} alt="" width={8} height={8} />
          <p className="font-sans text-lg font-semibold leading-6 text-[#9999a6]">{label}</p>
        </div>

        <h2 id="home-about-title" className="max-w-[1100px] font-sans text-3xl font-medium leading-tight text-[#f0f0fd] sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <div className="grid border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={`${stat.label}-${index}`}
              className="min-h-[205px] border-b border-white/[0.08] px-0 py-8 sm:border-r sm:px-9 lg:border-b-0 lg:first:pl-0 lg:last:border-r-0"
            >
              <div className="flex h-full flex-col gap-6">
                {stat.image ? (
                  <Image
                    src={stat.image}
                    alt={stat.imageAlt ?? ""}
                    width={123}
                    height={79}
                    className="h-[78.9px] w-[123px] object-contain object-left"
                  />
                ) : (
                  <p className="bg-gradient-to-r from-[#738cff] via-[#8066f2] to-[#9959e5] bg-clip-text font-inter text-[52px] font-bold leading-normal text-transparent">
                    {stat.value}
                  </p>
                )}
                <p className="max-w-[190px] whitespace-pre-line font-inter text-[15px] leading-[1.55] text-[#80808c]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
