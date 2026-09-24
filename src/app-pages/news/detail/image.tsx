import Image from "next/image"
import { useTranslations } from "next-intl"

export function NewsDetailImage({ src = "/news/news-1.jpeg" }: { src?: string }) {
  const t = useTranslations("Common")
  return (
    <section data-node-id="274:273" className="bg-white px-6 pt-10 sm:px-10 lg:px-20 lg:pt-12">
      <div className="relative mx-auto h-[300px] max-w-[1120px] overflow-hidden rounded-[20px] bg-[#e5e5eb] sm:h-[420px]">
        <Image src={src} alt={t("news")} fill sizes="1120px" className="object-cover" />
      </div>
    </section>
  )
}
