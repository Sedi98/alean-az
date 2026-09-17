import Image from "next/image"

export interface MedicalFeature {
  number: string
  title: string
  description: string
}

export interface MedicalTourismSectionProps {
  number: string
  title: string
  description: string
  features: MedicalFeature[]
  image: string
}

export function MedicalTourismSection({ number, title, description, features, image }: MedicalTourismSectionProps) {
  return (
    <section data-node-id="236:2291" className="bg-[#f7f7fa] px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[minmax(0,800px)_409px] lg:gap-[71px]">
        <div className="flex flex-col gap-8">
          <div className="flex w-full max-w-[469px] flex-col gap-6">
            <p className="font-sans text-base font-medium leading-[1.5] text-[#6666ec]">{number} / TİBBİ TURİZM</p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-[21px]">
                <Image src="/services/medical-icon.svg" alt="" width={52} height={52} />
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

        <div className="relative h-[360px] w-full overflow-hidden rounded-[18px] bg-[#ebebf0] sm:h-[435px]">
          <Image src={image} alt="Tibbi turizm" fill sizes="409px" className="object-cover" />
        </div>
      </div>
    </section>
  )
}
