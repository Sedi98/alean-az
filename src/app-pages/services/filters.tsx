"use client"

import { Button } from "@/components/ui/button"
import type { Chip } from "@/features/services/services/types"

export interface ServicesFiltersProps {
  filters: Chip[]
}

export function ServicesFilters({ filters }: ServicesFiltersProps) {
  return (
    <section aria-label="Xidmət kateqoriyaları" className="bg-white px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
      <div className="mx-auto flex max-w-[1282px] flex-wrap items-center gap-4">
        {filters.map((filter) => (
          <Button
            key={filter.key}
            type="button"
            onClick={() => document.getElementById(filter.key)?.scrollIntoView({ behavior: "smooth", block: "start" })}
            variant="outline"
            className="h-auto rounded-full border-[#d0d0f9] bg-transparent px-4 py-[10px] font-sans text-base font-medium leading-[1.5] text-[#4848a8] hover:bg-[#f0f0fd] hover:text-[#4848a8]"
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </section>
  )
}
