import Image from "next/image"

import { Button } from "@/components/ui/button"
import { SectionLabel } from "@/components/section-label"

export interface ToursSectionProps {
  category: string
  icon?: string | null
  title: string
  description: string
  categories: string[]
}

export function ToursSection({ category, icon, title, description, categories }: ToursSectionProps) {
  return (
    <section id="tours" data-node-id="222:1594" className="scroll-mt-6 bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="flex w-full max-w-[800px] flex-col items-start">
          <div className="flex w-full flex-col gap-[34px]">
            <div className="flex w-full flex-col items-start">
              <div className="flex w-full max-w-[469px] flex-col gap-6">
                <SectionLabel>{category}</SectionLabel>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-[21px]">
                    <Image src={icon ?? "/services/tours-icon.svg"} alt="" width={48} height={48} />
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
