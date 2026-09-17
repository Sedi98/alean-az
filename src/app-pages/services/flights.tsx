import Image from "next/image"

export interface FlightFeature {
  title: string
  description: string
}

export interface FlightsSectionProps {
  number: string
  category: string
  title: string
  description: string[]
  features: FlightFeature[]
  mainImage: string
  secondaryImages: [string, string]
}

export function FlightsSection({
  number,
  category,
  title,
  description,
  features,
  mainImage,
  secondaryImages,
}: FlightsSectionProps) {
  return (
    <section data-node-id="226:240" className="bg-[#f7f7fa] px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[minmax(0,800px)_409px] lg:gap-[clamp(64px,6vw,71px)]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <p className="font-sans text-base font-medium leading-[1.5] text-[#6666ec]">
              {number} / {category}
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-[21px]">
                <span className="relative size-[52px] shrink-0">
                  <Image src="/services/service-icon.svg" alt="" fill sizes="52px" />
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

        <div className="flex flex-col items-center gap-[15px] lg:pt-0">
          <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-[#ebebf0]">
            <Image src={mainImage} alt="Aviaşirkət və bilet xidmətləri" fill sizes="409px" className="object-cover" />
          </div>
          <div className="flex w-full gap-5">
            {secondaryImages.map((image, index) => (
              <div key={image} className="relative h-[168px] min-w-0 flex-1 overflow-hidden rounded-xl bg-[#ebebf0]">
                <Image src={image} alt={`Aviaşirkət xidməti ${index + 1}`} fill sizes="195px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
