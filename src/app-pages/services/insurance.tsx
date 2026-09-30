import Image from "next/image"
import { SectionLabel } from "@/components/section-label"

export interface InsuranceFeature {
  title: string
}

export interface InsuranceSectionProps {
  category: string
  icon?: string | null
  title: string
  description: string[]
  features: InsuranceFeature[]
}

export function InsuranceSection({ category, icon, title, description, features }: InsuranceSectionProps) {
  return (
    <section id="insurance" data-node-id="222:2087" className="scroll-mt-6 bg-transparent px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex w-full flex-col gap-8">
          <div className="flex w-full max-w-[956px] flex-col gap-6">
            <SectionLabel>{category}</SectionLabel>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-[21px]">
                <Image src={icon ?? "/services/insurance-icon.svg"} alt="" width={48} height={48} />
                <h2 className="font-sans text-[28px] font-semibold leading-[1.25] text-white sm:text-[36px]">{title}</h2>
              </div>
              <div className="flex flex-col gap-4 font-sans text-base leading-[1.5] text-white">
                {description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex min-h-[82px] items-center rounded-xl border bg-[#332661] p-5 font-sans text-[15px] font-semibold leading-normal text-white ${index === 0 ? "border-[#b9b9f6]" : "border-[#d0d0f9]"}`}
              >
                {feature.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
