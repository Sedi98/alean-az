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
          <div className="flex w-full max-w-[800px] flex-col gap-6">
            <SectionLabel>{category}</SectionLabel>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-[21px]">
                <span className="relative size-[52px] shrink-0">
                  <Image src={icon ?? "/services/service-icon.svg"} alt="" fill sizes="52px" />
                </span>
                <h2 className="font-[family-name:var(--font-hero-title)] text-[28px] font-medium leading-[1.25] text-[#14141a] sm:text-[36px]">
                  {title}
                </h2>
              </div>
              <div className="flex flex-col gap-4 font-[family-name:var(--font-hero-description)] text-base leading-[1.5] text-[#80808c]">
                {description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex min-h-[131px] flex-col items-start justify-center gap-[6px] rounded-[10px] border border-[#b9b9f6] px-4 py-5"
              >
                <Image src="/services/feature-dot.svg" alt="" width={6} height={6} />
                <h3 className="font-[family-name:var(--font-hero-description)] text-lg font-medium leading-[1.5] text-[#2b2b63]">{feature.title}</h3>
                <p className="font-[family-name:var(--font-hero-description)] text-base leading-[1.5] text-[#80808c]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
