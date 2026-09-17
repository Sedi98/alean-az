import { Button } from "@/components/ui/button"

export interface ServicesFiltersProps {
  filters: string[]
}

export function ServicesFilters({ filters }: ServicesFiltersProps) {
  return (
    <section aria-label="Xidmət kateqoriyaları" className="bg-white px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
      <div className="mx-auto flex max-w-[1282px] flex-wrap items-center gap-4">
        {filters.map((filter) => (
          <Button
            key={filter}
            type="button"
            variant="outline"
            className="h-auto rounded-full border-[#d0d0f9] bg-transparent px-4 py-[10px] font-sans text-base font-medium leading-[1.5] text-[#4848a8] hover:bg-[#f0f0fd] hover:text-[#4848a8]"
          >
            {filter}
          </Button>
        ))}
      </div>
    </section>
  )
}
