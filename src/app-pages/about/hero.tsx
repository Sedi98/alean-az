export interface AboutHeroProps {
  breadcrumb: string
  title: string
  image: string
}

export function AboutHero({ breadcrumb, title }: AboutHeroProps) {
  return (
    <section className="relative min-h-[300px] overflow-hidden bg-[linear-gradient(180deg,#14141f_0%,#1f1a38_50%,#332661_100%)]">
      <div className="relative mx-auto flex min-h-[300px] max-w-[1440px] flex-col items-start gap-5 px-6 pt-[136px] sm:px-10 lg:px-20">
        <p className="font-[family-name:var(--font-hero-description)] text-sm font-normal leading-[1.25] text-[#9999a6]">{breadcrumb}</p>
        <h1 className="font-[family-name:var(--font-hero-title)] text-4xl font-medium leading-none text-white sm:text-5xl">{title}</h1>
      </div>
    </section>
  )
}
