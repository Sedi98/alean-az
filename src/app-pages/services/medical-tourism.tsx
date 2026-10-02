import Image from "next/image"
import { SectionLabel } from "@/components/section-label"

export interface MedicalFeature {
  number: string
  title: string
  description: string
}

export interface MedicalTourismSectionProps {
  category: string
  icon?: string | null
  title: string
  description: string
  features: MedicalFeature[]
}

export function MedicalTourismSection({ category, icon, title, description, features }: MedicalTourismSectionProps) {
  return (
    <section id="medical" data-node-id="236:2291" className="relative isolate scroll-mt-6 overflow-hidden bg-[#f7f7fa] px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <Image src="/services/layer-image.png" alt="" aria-hidden="true" width={277} height={500} className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[500px] w-[277px] object-contain sm:block" />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8">
          <div className="flex w-full max-w-[469px] flex-col gap-6">
            <SectionLabel>{category}</SectionLabel>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-[21px]">
                <Image src={icon ?? "/services/medical-icon.svg"} alt="" width={52} height={52} />
                <h2 className="font-sans text-[28px] font-semibold leading-[1.25] text-[#14141a] sm:text-[36px]">{title}</h2>
              </div>
              <p className="font-sans text-base leading-[1.5] text-[#666673]">{description}</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.number} className="flex min-h-[118px] flex-col gap-[6px] rounded-[10px] border border-[#d0d0f9] px-5 py-4">
                <div className="flex items-center gap-[6px]">
                  <Image src="/services/medical-dot.svg" alt="" width={6} height={6} />
                  <span className="flex size-[30px] items-center justify-center rounded-full bg-[#fbf5b1] font-sans text-sm font-medium leading-[1.25] text-[#2b2b63]">
                    {feature.number}
                  </span>
                </div>
                <h3 className="font-sans text-sm font-semibold leading-normal text-[#14141a]">{feature.title}</h3>
                <p className="font-sans text-xs leading-[1.55] text-[#737380]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
