import Image from "next/image"
import { cn } from "@/lib/utils"

export interface WhyAleanCardProps {
  title: string
  description: string
  number: string
  icon?: string | null
  className?: string
}

export function WhyAleanCard({ title, description, number, icon, className }: WhyAleanCardProps) {
  return (
    <article className={cn("relative isolate flex h-[272px] flex-col overflow-hidden rounded-2xl border border-[rgba(115,140,255,0.12)] bg-[#14141a] py-7 pl-[29px] pr-3", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-px right-px z-0 w-[94px] rounded-r-2xl bg-[linear-gradient(270deg,rgba(143,108,237,0.3),rgba(106,107,240,0.2)_21.211%,rgba(20,20,25,0))]"
      />
      <div className="relative z-10 flex flex-col gap-4">
        {icon ? <Image src={icon} alt="" width={28} height={28} className="size-7 shrink-0" /> : null}
        <div className="flex flex-col gap-4 break-words">
          <h3 className="font-[family-name:var(--font-hero-description)] text-xl font-medium leading-[1.5] text-white">{title}</h3>
          <p className="font-[family-name:var(--font-hero-description)] text-base leading-[1.5] text-[#80808c]">{description}</p>
        </div>
      </div>
      <p className="relative z-10 mt-auto font-sans text-lg font-bold leading-[1.5] text-[#f2e002]">{number}</p>
    </article>
  )
}
