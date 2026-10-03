import Image from "next/image"
import { Link } from "@/i18n/navigation"

export interface HeroSectionProps {
  image?: string
  imageAlt?: string
  title: string
  description: string
  buttonText: string
  url: string
}

export function HeroSection({
  image,
  imageAlt = "",
  title,
  description,
  buttonText,
  url,
}: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[616px] items-center justify-center overflow-hidden bg-[#0a0a0d] px-4 md:px-0"
    >
      <Image
        src="/brand/home-hero-vectors.svg"
        alt=""
        fill
        priority
        className="pointer-events-none object-cover"
        sizes="100vw"
      />

      <div className="relative z-10 mx-auto flex min-h-[416px] w-full max-w-[1282px] items-center py-16">
        <div className="w-full max-w-[80%] text-left text-white">
          <h1
            id="hero-title"
            className="max-w-[80%] whitespace-pre-line font-[family-name:var(--font-hero-title)] text-[42px] font-bold leading-none sm:text-[60px]"
          >
            {title}
          </h1>
          <p className="mt-[14px] max-w-[600px] whitespace-pre-line font-[family-name:var(--font-hero-description)] text-base leading-6 text-white sm:text-lg sm:leading-[27px]">
            {description}
          </p>
          <Link
            href={url}
            className="mt-5 inline-flex items-center justify-center gap-4 rounded-full bg-[#f2e002] py-[6px] pl-[6px] pr-8 text-lg font-medium leading-[27px] text-[#0f0f14] transition-colors hover:bg-[#f2e002]/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="relative size-11 shrink-0 overflow-hidden rounded-full">
              <Image src="/brand/icon-circle.svg" alt="" fill sizes="44px" />
              <span className="absolute inset-0 flex items-center justify-center text-[22px] font-bold leading-none text-[#f2e002]">
                »
              </span>
            </span>
            {buttonText}
          </Link>
        </div>
      </div>
      {image ? (
        <div className="absolute bottom-0 right-0 z-[1] aspect-video w-full overflow-hidden rounded-tl-3xl sm:w-1/2 lg:w-[60%]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 1023px) 100vw, 50vw"
          />
        </div>
      ) : null}
    </section>
  )
}
