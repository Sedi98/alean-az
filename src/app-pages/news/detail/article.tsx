import Image from "next/image"
import { useTranslations } from "next-intl"

import type { PublicNewsDetail } from "@/features/services/news/types"

export interface NewsArticleProps {
  news: PublicNewsDetail
}

export function NewsArticle({ news }: NewsArticleProps) {
  const t = useTranslations("Common")
  const paragraphs = (news.content ?? "").split(/\n{2,}/).filter(Boolean)

  return (
    <section data-node-id="274:275" className="bg-white px-6 pb-16 pt-12 sm:px-10 lg:px-40 lg:pb-20">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        <article className="flex min-w-0 flex-1 flex-col gap-6">
          <span className="self-start rounded-full bg-[#f0f0f5] px-3.5 py-1.5 font-sans text-[11px] font-semibold tracking-[1.65px] text-[#595966]">{news.category.name}</span>
          <h2 className="font-sans text-[30px] font-bold leading-[1.25] text-[#14141a] sm:text-[36px]">{news.title}</h2>
          <div className="flex items-center justify-between font-sans text-sm"><span className="font-medium text-[#595966]">{news.author ?? "ALEAN Tour Operator"}</span><time className="text-[#80808c]">{news.date}</time></div>
          {news.summary && <p className="font-sans text-base leading-[1.75] text-[#4d4d59]">{news.summary}</p>}
          <div className="h-px w-full bg-black/[0.08]" />
          {paragraphs.map((paragraph) => <p key={paragraph} className="whitespace-pre-line font-sans text-[15px] leading-[1.85] text-[#4d4d59]">{paragraph}</p>)}
        </article>

        <aside className="flex w-full shrink-0 flex-col gap-8 lg:w-[200px]">
          <h2 className="font-sans text-base font-bold text-[#14141a]">{t("share")}</h2>
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Facebook-da paylaş" className="flex size-10 items-center justify-center rounded-full border border-black/10 font-inter text-lg font-bold text-[#4d4d59]">f</button>
            <button type="button" aria-label="LinkedIn-də paylaş" className="flex size-10 items-center justify-center rounded-full border border-black/10 font-inter text-[15px] font-bold text-[#4d4d59]">in</button>
            <button type="button" aria-label="Paylaş" className="relative size-10 overflow-hidden rounded-full"><Image src="/news/detail/share-icon.svg" alt="" fill sizes="40px" /></button>
          </div>
          <div className="h-px w-full bg-black/[0.08]" />
          <h2 className="font-sans text-base font-bold text-[#14141a]">{t("keywords")}</h2>
          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag) => <span key={tag.slug} className="rounded-lg bg-[#f2f2f7] px-3 py-1.5 font-sans text-xs font-medium text-[#595966]">{tag.name}</span>)}
          </div>
        </aside>
      </div>
    </section>
  )
}
