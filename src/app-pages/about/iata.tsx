import Image from "next/image"

export interface IataSectionProps {
  logo: string
  title: string
  description: string
  benefits: string[]
}

export function IataSection({ logo, title, description, benefits }: IataSectionProps) {
  return (
    <section className="bg-[#f0f0fd] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="grid items-start gap-8 lg:grid-cols-[175px_minmax(0,1fr)_280px] lg:gap-[60px]">
          <Image src={logo} alt="IATA" width={175} height={112} className="h-[112px] w-[175px] object-cover" />
          <div className="flex flex-col gap-4">
            <h2 className="font-sans text-2xl font-bold leading-normal text-[#14141a] sm:text-[28px]">{title}</h2>
            <p className="font-sans text-sm leading-[1.7] text-[#666673]">{description}</p>
          </div>
          <ul className="flex flex-col gap-2.5 font-sans text-sm leading-normal text-[#595966]">
            {benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
          </ul>
        </div>
        <div className="h-px w-full bg-black/[0.08]" />
      </div>
    </section>
  )
}

