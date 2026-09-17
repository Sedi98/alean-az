import Image from "next/image"

export interface PartnerListItemProps {
  name: string
  logo: string
  logoWidth: number
  logoHeight: number
  description: string
  benefits: string[]
  muted?: boolean
}

export function PartnerListItem({ name, logo, logoWidth, logoHeight, description, benefits, muted = false }: PartnerListItemProps) {
  return (
    <article className={`overflow-hidden px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px] ${muted ? "bg-[#f7f7fa]" : "bg-white"}`}>
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-10 lg:flex-row lg:gap-0">
        <div className="flex w-full shrink-0 items-start lg:w-[206px]">
          <Image src={logo} alt={name} width={logoWidth} height={logoHeight} className="h-auto max-w-full object-contain object-left" />
        </div>
        <div className="hidden h-2.5 w-[60px] shrink-0 lg:block" />
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <h2 className="font-sans text-2xl font-bold leading-normal text-[#14141a] sm:text-[28px]">{name}</h2>
          <p className="max-w-[620px] font-sans text-sm leading-[1.7] text-[#666673]">{description}</p>
        </div>
        <div className="hidden h-2.5 w-[60px] shrink-0 lg:block" />
        <ul className="flex w-full shrink-0 list-none flex-col gap-2.5 font-sans text-sm leading-normal text-[#595966] lg:w-[280px]">
          {benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
        </ul>
      </div>
      <div className="mx-auto mt-10 h-px max-w-[1280px] bg-black/[0.08] lg:mt-[38px]" />
    </article>
  )
}
