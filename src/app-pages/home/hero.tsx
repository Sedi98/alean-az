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
      className="relative isolate min-h-[616px] overflow-hidden bg-[linear-gradient(181.45deg,rgba(97,97,97,0)_4.48%,rgba(64,73,152,0.721)_87.75%,#333fae_101.61%)] flex items-center justify-center"
    >
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="-z-10 object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : null}

      <div className="mx-auto flex min-h-[416px] max-w-[1282px] items-center px-6 py-16 sm:px-10 lg:px-20">
        <div className="w-full text-center text-white">
          <h1
            id="hero-title"
            className="whitespace-pre-line font-[family-name:var(--font-hero)] text-[42px] font-bold leading-none sm:text-[60px]"
          >
            {title}
          </h1>
          <p className="mx-auto mt-[14px] max-w-[752px] whitespace-pre-line font-[family-name:var(--font-hero)] text-base leading-6 text-white sm:text-lg sm:leading-[27px]">
            {description}
          </p>
          <Link
            href={url}
            className="mt-[78px] inline-flex items-center justify-center gap-4 rounded-full bg-[#f2e002] py-[6px] pl-[6px] pr-8 text-lg font-medium leading-[27px] text-[#0f0f14] transition-colors hover:bg-[#f2e002]/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
    </section>
  )
}
