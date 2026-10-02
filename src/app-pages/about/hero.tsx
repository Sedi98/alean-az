export interface AboutHeroProps {
  breadcrumb: string
  title: string
  image: string
}

export function AboutHero({ breadcrumb, title }: AboutHeroProps) {
  return (
    <section className="relative min-h-[400px] overflow-hidden bg-[linear-gradient(180deg,#14141f_0%,#1f1a38_50%,#332661_100%)]">
      <div className="relative mx-auto flex min-h-[400px] max-w-[1440px] flex-col items-start px-6 pt-[136px] sm:px-10 lg:px-20">
        <p className="font-sans text-base font-medium leading-6 text-[#9999a6]">{breadcrumb}</p>
        <h1 className="mt-4 font-[family-name:var(--font-hero-title)] text-3xl font-semibold leading-[1.25] text-white sm:text-4xl">{title}</h1>
      </div>
    </section>
  )
}
