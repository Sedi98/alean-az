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
    <article className={cn("flex h-[271px] flex-col gap-4 overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#14141a] px-6 py-7", className)}>
      <div className="flex flex-col gap-4">
        {icon ? <Image src={icon} alt="" width={28} height={28} className="size-7" /> : null}
        <div className="flex flex-col gap-4">
          <h3 className="font-sans text-xl font-semibold leading-[1.5] text-white">{title}</h3>
          <p className="font-sans text-sm leading-[1.65] text-[#80808c]">{description}</p>
        </div>
      </div>
      <p className="mt-auto font-sans text-lg font-bold leading-[1.5] text-[#f2e002]">{number}</p>
    </article>
  )
}
