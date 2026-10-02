import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

export interface EventCardProps {
  title: string
  description: string
  href?: string
  className?: string
}

export function EventCard({ title, description, href, className }: EventCardProps) {
  const content = (
      <div className="relative flex min-h-[170px] w-full flex-1 flex-col items-center justify-between gap-4 p-8" data-node-id="152:2124">
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[97px] rounded-r-2xl bg-[linear-gradient(270deg,rgba(143,108,237,0.68),rgba(106,107,240,0.68)_21.211%,rgba(20,20,25,0))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute bottom-[-31px] right-[-20px] z-10 flex h-[139.062px] w-[141.07px] items-center justify-center rotate-[69.36deg] opacity-0 transition-opacity duration-300 group-hover:opacity-100" data-node-id="152:2117">
        <Image
          src="/events/event-card-hover-image.png"
          alt=""
          width={107}
          height={110}
          className="pointer-events-none relative z-10 h-[110.441px] w-[107.286px] object-bottom opacity-70"
          data-node-id="152:2118"
        />
      </div>
      <div className="relative z-10 flex w-[min(239px,100%)] flex-col gap-[6px] break-words">
        <h3 className="font-sans text-xl font-medium leading-[1.5] text-[#f0f0fd]">{title}</h3>
        <p className="font-sans text-lg font-normal leading-[1.5] text-[#80808c]">{description}</p>
      </div>
    </div>
  )

  const cardClassName = cn(
    "group relative flex min-h-[170px] w-full flex-col overflow-hidden rounded-2xl border border-[rgba(115,140,255,0.12)] bg-[#14141a] transition-[border-color,box-shadow] duration-300 hover:border-[rgba(115,140,255,0.65)] hover:shadow-[0_14px_35px_rgba(115,108,237,0.16)]",
    href && "cursor-pointer",
    className,
  )

  return href ? <Link href={href} className={cardClassName}>{content}</Link> : <article className={cardClassName}>{content}</article>
}
