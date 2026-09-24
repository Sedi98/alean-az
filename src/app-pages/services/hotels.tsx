import Image from "next/image"

import { ServiceImageGallery, type ServiceImage } from "./image-gallery"

export interface HotelFeature {
  title: string
  description: string
}

export interface HotelsSectionProps {
  category: string
  icon?: string | null
  title: string
  description: string
  features: HotelFeature[]
  images: ServiceImage[]
}

function HotelIcon({ icon }: { icon?: string | null }) {
  if (icon) return <Image src={icon} alt="" width={48} height={48} />

  return (
    <span className="relative size-12 shrink-0 overflow-hidden rounded-[14px] bg-[#f2f2f7]" aria-hidden="true">
      <span className="absolute left-3 top-[11px] h-[26px] w-6 rounded-[2px] border-2 border-[#f2e002]" />
      <span className="absolute left-5 top-[26px] h-[11px] w-2 rounded-[1px] bg-[#f2e002]" />
      <span className="absolute left-4 top-[15px] size-[5px] rounded-[1px] bg-[#f2e002]" />
      <span className="absolute left-[27px] top-[15px] size-[5px] rounded-[1px] bg-[#f2e002]" />
    </span>
  )
}

export function HotelsSection({ category, icon, title, description, features, images }: HotelsSectionProps) {
  return (
    <section id="hotels" data-node-id="222:1596" className="scroll-mt-6 bg-[#f7f7fa] px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[minmax(0,800px)_409px] lg:gap-[71px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex w-full max-w-[469px] flex-col gap-6">
              <p className="font-sans text-base font-medium leading-[1.5] text-[#6666ec]">{category}</p>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-[21px]">
                  <HotelIcon icon={icon} />
                  <h2 className="font-sans text-[28px] font-semibold leading-[1.25] text-[#14141a] sm:text-[36px]">{title}</h2>
                </div>
                <p className="font-sans text-base leading-[1.5] text-[#666673]">{description}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {features.map((feature) => (
              <div key={feature.title} className="flex min-h-[90px] flex-col gap-[6px] rounded-[10px] border border-[#d0d0f9] bg-[#f7f7fa] px-5 py-4">
                <Image src="/services/hotels-dot.svg" alt="" width={6} height={6} />
                <h3 className="font-sans text-sm font-semibold leading-normal text-[#14141a]">{feature.title}</h3>
                <p className="font-sans text-xs leading-[1.55] text-[#737380]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <ServiceImageGallery images={images} />
      </div>
    </section>
  )
}
