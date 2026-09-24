import Image from "next/image"

export interface AboutHeroProps {
  breadcrumb: string
  title: string
  image: string
}

export function AboutHero({ breadcrumb, title, image }: AboutHeroProps) {
  return (
    <section className="relative min-h-[400px] overflow-hidden bg-[linear-gradient(90deg,rgba(55,0,121,0.3),rgba(0,41,196,0.3))]">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-top" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(55,0,121,0.3),rgba(0,41,196,0.3))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,20,0.3),rgba(10,10,20,0.6)_50%,rgba(10,10,20,0.2))] mix-blend-multiply" />
      <div className="relative mx-auto flex min-h-[400px] max-w-[1440px] flex-col items-start px-6 pt-[136px] sm:px-10 lg:px-20">
        <p className="font-sans text-base font-medium leading-6 text-[#9999a6]">{breadcrumb}</p>
        <h1 className="mt-4 font-[family-name:var(--font-hero-title)] text-3xl font-semibold leading-[1.25] text-white sm:text-4xl">{title}</h1>
      </div>
    </section>
  )
}
