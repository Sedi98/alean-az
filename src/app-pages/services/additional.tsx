import { SectionLabel } from "@/components/section-label"

export interface AdditionalService {
  title: string
}

export interface AdditionalServicesSectionProps {
  category: string
  title: string
  services: AdditionalService[]
}

export function AdditionalServicesSection({ category, title, services }: AdditionalServicesSectionProps) {
  return (
    <section id="extras" data-node-id="239:2372" className="scroll-mt-6 bg-transparent px-0 py-0">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
        <div className="flex w-full max-w-[469px] flex-col gap-6">
          <SectionLabel>{category}</SectionLabel>
          <h2 className="font-sans text-[28px] font-semibold leading-[1.25] text-white sm:text-[36px]">{title}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex min-h-[82px] items-center rounded-xl border bg-[#14141a] p-5 font-sans text-[15px] font-semibold leading-normal text-white ${index === 0 ? "border-[#b9b9f6]" : "border-[#d0d0f9]"}`}
            >
              {service.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
