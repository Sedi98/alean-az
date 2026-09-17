export interface ServicesHeroProps {
  breadcrumb: string
  eyebrow: string
  title: string
  description: string
  metadata: string
}

export function ServicesHero({ breadcrumb, eyebrow, title, description, metadata }: ServicesHeroProps) {
  return (
    <section
      aria-labelledby="services-hero-title"
      className="relative min-h-[461px] overflow-hidden border border-[rgba(255,255,255,0.05)] bg-[linear-gradient(180deg,#14141f_0%,#1f1a38_50%,#332661_100%)]"
    >
      <div className="relative mx-auto flex min-h-[461px] max-w-[1440px] items-center px-6 py-24 sm:px-10 lg:px-20">
        <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-[clamp(64px,18vw,260px)]">
          <div className="w-full max-w-[539px]">
            <div className="flex flex-col gap-[19px] font-sans text-sm leading-[1.25] text-[#737380]">
              <p>{breadcrumb}</p>
              <p>{eyebrow}</p>
            </div>
            <h1
              id="services-hero-title"
              className="mt-[22px] whitespace-pre-line font-sans text-[36px] font-semibold leading-none text-[#f0f0fd] sm:text-[48px]"
            >
              {title}
            </h1>
            <p className="mt-[22px] whitespace-pre-line font-sans text-base leading-[1.5] text-[#d0d0f9] sm:text-lg">
              {description}
            </p>
          </div>
          <p className="w-full max-w-[482px] text-left font-sans text-xs leading-[1.6] text-[#666673] lg:mt-[112px] lg:max-w-[420px] lg:text-right">
            {metadata}
          </p>
        </div>
      </div>
    </section>
  )
}
