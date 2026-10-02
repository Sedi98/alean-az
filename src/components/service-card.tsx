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
      <div className="flex w-full items-start justify-between overflow-hidden" data-node-id="130:78">
        <Image src={icon} alt={iconAlt} width={52} height={52} className="size-[52px]" data-node-id="130:79" />
        <span
          aria-hidden="true"
          className="flex size-9 translate-y-1 items-center justify-center overflow-hidden rounded-[10px] bg-[linear-gradient(135deg,#738cff_0%,#8059f2_71.429%)] font-sans text-[18px] font-bold leading-none text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
          data-node-id="130:81"
        >
          ↗
        </span>
      </div>
      <h3 className="font-[family-name:var(--font-hero-description)] text-2xl font-semibold leading-9 text-[#14141a]" data-node-id="130:83">{title}</h3>
      <p className="min-w-full font-[family-name:var(--font-hero-description)] text-base font-normal leading-6 text-[#545454]" data-node-id="130:84">{description}</p>
    </>
  )

  const cardClassName = cn(
    "group flex min-h-[260px] flex-col items-start gap-4 rounded-2xl border border-black/[0.06] bg-[#fafafc] p-7 transition-[border-color,box-shadow] duration-200 hover:border-2 hover:border-[#738cff] hover:shadow-[0_8px_12px_rgba(115,115,242,0.1)]",
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
