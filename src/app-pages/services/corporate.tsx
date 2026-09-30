import Image from "next/image"
import { SectionLabel } from "@/components/section-label"

export interface CorporateFeature {
  title: string
  description: string
}

export interface CorporateSectionProps {
  category: string
  icon?: string | null
  title: string
  description: string
  features: CorporateFeature[]
}

export function CorporateSection({ category, icon, title, description, features }: CorporateSectionProps) {
  return (
    <section
      id="corporate"
      data-node-id="236:2196"
      className="scroll-mt-6 bg-transparent px-0 py-0"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex w-full flex-col gap-8">
          <div className="flex w-full max-w-[622px] flex-col gap-6">
            <SectionLabel>{category}</SectionLabel>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-[21px]">
                <Image src={icon ?? "/services/corporate-icon.svg"} alt="" width={48} height={48} />
                <h2 className="font-sans text-[28px] font-semibold leading-[1.25] text-white sm:text-[36px]">{title}</h2>
              </div>
              <p className="font-sans text-base leading-[1.5] text-white">{description}</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex min-h-[108px] flex-col justify-center gap-2 rounded-xl border border-[#4848a8] bg-[#2b2b63] p-5">
                <h3 className="font-sans text-[15px] font-semibold leading-normal text-white">{feature.title}</h3>
                <p className="font-sans text-xs leading-[1.55] text-[#f0f0fd]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
