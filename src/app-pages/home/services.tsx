import Image from "next/image"

import { ServiceCard, type ServiceCardProps } from "@/components/service-card"

export interface ServicesSectionProps {
  label: string
  dotImage: string
  services: ServiceCardProps[]
}

export function ServicesSection({ label, dotImage, services }: ServicesSectionProps) {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <Image src={dotImage} alt="" width={8} height={8} />
          <p className="font-sans text-lg font-medium leading-[1.5] text-[#666673]">{label}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

