import Image from "next/image"
import { SectionLabel } from "@/components/section-label"

export interface FlightFeature {
  title: string
  description: string
}

export interface FlightsSectionProps {
  category: string
  icon?: string | null
  title: string
  description: string[]
  features: FlightFeature[]
}

export function FlightsSection({
  category,
  icon,
  title,
  description,
  features,
}: FlightsSectionProps) {
  return (
    <section id="aviation" data-node-id="226:240" className="scroll-mt-6 bg-gradient-to-b from-white to-[rgba(223,223,255,0.52)] px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <SectionLabel>{category}</SectionLabel>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-[21px]">
                <span className="relative size-[52px] shrink-0">
                  <Image src={icon ?? "/services/service-icon.svg"} alt="" fill sizes="52px" />
                </span>
                <h2 className="font-sans text-[28px] font-semibold leading-[1.25] text-[#14141a] sm:text-[36px]">
                  {title}
                </h2>
              </div>
              <div className="flex flex-col gap-4 font-sans text-base leading-[1.5] text-[#666673]">
                {description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex min-h-[90px] flex-col gap-[6px] rounded-[10px] border border-[#d0d0f9] bg-[#f7f7fa] px-5 py-4"
              >
                <Image src="/services/feature-dot.svg" alt="" width={6} height={6} />
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
