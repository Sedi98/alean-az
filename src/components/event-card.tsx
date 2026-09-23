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
    <>
      <div className="pointer-events-none absolute left-[210.95px] top-px h-[170px] w-[93.053px] rounded-r-2xl bg-[linear-gradient(270deg,rgba(143,108,237,0.3),rgba(106,107,240,0.2)_21.211%,rgba(20,20,25,0))]" />
      <div className="absolute left-8 top-8 flex w-[239.278px] flex-col gap-1">
        <h3 className="font-sans text-xl font-medium leading-[1.5] text-white">{title}</h3>
        <p className="font-sans text-lg font-normal leading-[1.5] text-[#80808c]">{description}</p>
      </div>
    </>
  )

  const cardClassName = cn(
    "relative block h-[170px] w-full overflow-hidden rounded-2xl border border-[rgba(115,140,255,0.12)] bg-[#14141a] transition-shadow hover:shadow-lg",
    href && "cursor-pointer",
    className,
  )

  return href ? <Link href={href} className={cardClassName}>{content}</Link> : <article className={cardClassName}>{content}</article>
}
