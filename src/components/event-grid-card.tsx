import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { normalizeSlug } from "@/lib/routes"

export interface EventGridCardProps {
  slug: string
  image: string
  category: string
  date: string
  title: string
  location: string
  categoryClassName?: string
}

export function EventGridCard({ slug, image, category, date, title, location, categoryClassName = "text-[#2b2b63]" }: EventGridCardProps) {
  return (
    <Link href={`/events/${normalizeSlug(slug)}`} className="group flex min-w-0 flex-col items-start gap-3 overflow-hidden">
      <div className="relative h-[240px] w-full overflow-hidden rounded-2xl bg-[#ebebf0]">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="flex items-center gap-3">
        <span className={`rounded-full bg-[#f2e002] px-3 py-[5px] font-sans text-[10px] font-semibold leading-normal tracking-[1px] ${categoryClassName}`}>
          {category}
        </span>
        <time dateTime={date} className="font-sans text-xs leading-normal text-[#80808c]">{date}</time>
      </div>
      <h3 className="font-sans text-lg font-semibold leading-[1.3] text-[#14141a] group-hover:text-[#4848a8]">{title}</h3>
      <div className="flex items-center gap-[6px]">
        <Image src="/events/location-dot.svg" alt="" width={5} height={5} />
        <p className="font-sans text-xs leading-normal text-[#80808c]">{location}</p>
      </div>
    </Link>
  )
}
