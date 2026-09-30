import Image from "next/image"

export function SectionLabel({ children, id }: { children: string; id?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <Image src="/section-label-dot.svg" alt="" width={8} height={8} />
      <p id={id} className="whitespace-nowrap font-[family-name:var(--font-hero-description)] text-lg font-medium leading-[1.5] text-[#6666ec] uppercase">
        {children}
      </p>
    </div>
  )
}
