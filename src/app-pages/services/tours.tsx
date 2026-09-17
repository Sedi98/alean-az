import Image from "next/image"

import { Button } from "@/components/ui/button"

export interface ToursSectionProps {
  number: string
  title: string
  description: string
  image: string
  categories: string[]
}

export function ToursSection({ number, title, description, image, categories }: ToursSectionProps) {
  return (
    <section data-node-id="222:1594" className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:gap-[97px]">
        <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-2xl bg-[#ebebf0] sm:h-[404px] lg:w-[522px]">
          <Image src={image} alt="Tur xidmətləri" fill sizes="(max-width: 1024px) 100vw, 522px" className="object-cover" />
        </div>

        <div className="flex w-full flex-col items-start lg:h-[365px] lg:w-[661px]">
          <div className="flex w-full flex-col gap-[34px]">
            <div className="flex w-full flex-col items-start">
              <div className="flex w-full max-w-[469px] flex-col gap-6">
                <p className="font-sans text-base font-medium leading-[1.5] text-[#6666ec]">
                  {number} / TURLAR
                </p>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-[21px]">
                    <Image src="/services/tours-icon.svg" alt="" width={48} height={48} />
                    <h2 className="font-sans text-[28px] font-semibold leading-[1.25] text-[#14141a] sm:text-[36px]">
                      {title}
                    </h2>
                  </div>
                  <p className="font-sans text-base leading-[1.5] text-[#666673]">{description}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  type="button"
                  variant="outline"
                  className="h-auto rounded-full border-[#d0d0f9] bg-[#f0f0fd] px-3 py-2 font-sans text-xs font-medium leading-[1.5] text-[#4848a8] hover:bg-[#e7e7fb] hover:text-[#4848a8]"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
