import Image from "next/image"

export interface HotelFeature {
  title: string
  description: string
}

export interface HotelsSectionProps {
  number: string
  title: string
  description: string
  features: HotelFeature[]
  mainImage: string
  secondaryImages: [string, string]
}

function HotelIcon() {
  return (
    <span className="relative size-12 shrink-0 overflow-hidden rounded-[14px] bg-[#f2f2f7]" aria-hidden="true">
      <span className="absolute left-3 top-[11px] h-[26px] w-6 rounded-[2px] border-2 border-[#f2e002]" />
      <span className="absolute left-5 top-[26px] h-[11px] w-2 rounded-[1px] bg-[#f2e002]" />
      <span className="absolute left-4 top-[15px] size-[5px] rounded-[1px] bg-[#f2e002]" />
      <span className="absolute left-[27px] top-[15px] size-[5px] rounded-[1px] bg-[#f2e002]" />
    </span>
  )
}

export function HotelsSection({ number, title, description, features, mainImage, secondaryImages }: HotelsSectionProps) {
  return (
    <section data-node-id="222:1596" className="bg-[#f7f7fa] px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[minmax(0,800px)_409px] lg:gap-[71px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex w-full max-w-[469px] flex-col gap-6">
              <p className="font-sans text-base font-medium leading-[1.5] text-[#6666ec]">{number} / OTELLƏR</p>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-[21px]">
                  <HotelIcon />
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

        <div className="flex flex-col items-center gap-[15px]">
          <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-[#ebebf0]">
            <Image src={mainImage} alt="Otel xidmətləri" fill sizes="409px" className="object-cover" />
          </div>
          <div className="flex w-full gap-5">
            {secondaryImages.map((image, index) => (
              <div key={image} className="relative h-[168px] min-w-0 flex-1 overflow-hidden rounded-xl bg-[#ebebf0]">
                <Image src={image} alt={`Otel xidməti ${index + 1}`} fill sizes="195px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
