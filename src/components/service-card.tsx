import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

export interface ServiceCardProps {
  title: string
  description: string
  icon: string
  iconAlt?: string
  href?: string
  className?: string
}

export function ServiceCard({
  title,
  description,
  icon,
  iconAlt = "",
  href,
  className,
}: ServiceCardProps) {
  const content = (
    <>
      <div className="flex w-full items-start justify-between overflow-hidden">
        <Image src={icon} alt={iconAlt} width={48} height={48} className="size-12" />
      </div>
      <h3 className="font-sans text-2xl font-bold leading-9 text-[#14141a]">{title}</h3>
      <p className="font-sans text-lg font-medium leading-[1.5] text-[#666673]">{description}</p>
    </>
  )

  const cardClassName = cn(
    "group flex min-h-[260px] flex-col items-start gap-4 rounded-2xl border border-black/[0.06] bg-[#fafafc] p-7 transition-shadow hover:shadow-lg",
    href && "cursor-pointer",
    className,
  )

  return href ? (
    <Link href={href} className={cardClassName}>
      {content}
    </Link>
  ) : (
    <article className={cardClassName}>{content}</article>
  )
}
