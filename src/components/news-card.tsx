import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface NewsCardProps {
  title: string
  description: string
  image: string
  imageAlt?: string
  href?: string
  className?: string
}

export function NewsCard({ title, description, image, imageAlt = "", href, className }: NewsCardProps) {
  const content = (
    <>
      <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 34vw" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,#00033c,rgba(0,3,60,0.55)_50%,rgba(13,18,31,0))]" />
      <div className="absolute inset-x-7 bottom-7 flex flex-col items-start gap-3 text-white">
        <h3 className="font-sans text-2xl font-semibold leading-9">{title}</h3>
        <p className="font-sans text-base font-normal leading-6">{description}</p>
        <span className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-white/40 font-inter text-lg leading-none transition-colors group-hover:border-white">
          ↗
        </span>
      </div>
    </>
  )

  const cardClassName = cn("group relative h-[420px] overflow-hidden rounded-2xl bg-[#263852]", href && "cursor-pointer", className)

  return href ? <Link href={href} className={cardClassName}>{content}</Link> : <article className={cardClassName}>{content}</article>
}

