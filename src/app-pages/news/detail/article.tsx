import Image from "next/image"

export function NewsArticle() {
  return (
    <section data-node-id="274:275" className="bg-white px-6 pb-16 pt-12 sm:px-10 lg:px-40 lg:pb-20">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        <article className="flex min-w-0 flex-1 flex-col gap-6">
          <span className="self-start rounded-full bg-[#f0f0f5] px-3.5 py-1.5 font-sans text-[11px] font-semibold tracking-[1.65px] text-[#595966]">TURİZM</span>
          <h1 className="font-sans text-[30px] font-bold leading-[1.25] text-[#14141a] sm:text-[36px]">Azərbaycanda Turizmin Gələcəyi:<br />2026-cı İl Üçün Əsas Trendlər</h1>
          <div className="flex items-center justify-between font-sans text-sm"><span className="font-medium text-[#595966]">ALEAN Tour Operator</span><time className="text-[#80808c]">12 Mart 2026</time></div>
          <p className="font-sans text-base leading-[1.75] text-[#4d4d59]">2026-cı il Azərbaycan turizmi üçün dönüş nöqtəsi ola bilər. Ekoturizm, rəqəmsal transformasiya və MICE sektorundakı inkişaflar ölkəni regionun aparıcı turizm mərkəzinə çevirməyə davam edir.</p>
          <div className="h-px w-full bg-black/[0.08]" />
          <p className="font-sans text-[15px] leading-[1.85] text-[#4d4d59]">Azərbaycan son illərdə turizm sektorunda sürətli böyümə nümayiş etdirir. Beynəlxalq tədbirlərin artması, infrastruktur yenilənmələri və yeni turizm məhsulları ölkənin cəlbediciliyini artırır. Bu yazıda 2026-cı il üçün ən vacib trendləri nəzərdən keçiririk.</p>
          <ArticleParagraph title="1. Ekoturizmin yüksəlişi">Şəki, Qəbələ və Lahıc kimi bölgələr ekoturizm üçün getdikcə daha populyar olur. Təbiət turları, dağ yürüşləri və kənd turizmi beynəlxalq turistlər arasında tələb artımı yaşayır. Davamlı turizm prinsiplərinə əsaslanan layihələr hökumət dəstəyi ilə genişlənir.</ArticleParagraph>
          <ArticleParagraph title="2. Rəqəmsal transformasiya">Onlayn bronlaşdırma, virtual turlar və AI əsaslı səyahət planlaması turizm sektorunu dəyişdirir. ALEAN kimi şirkətlər öz bronlaşdırma sistemlərini inkişaf etdirərək agentliklərə sürətli və şəffaf xidmət təqdim edir.</ArticleParagraph>
          <ArticleParagraph title="3. MICE sektorunun genişlənməsi">Bakı konfrans və sərgi mərkəzlərinin artması ilə MICE turizmi üçün regional hub olmağa doğru irəliləyir. Beynəlxalq forumlar, biznes sammitlər və korporativ tədbirlər şəhərin imicini gücləndirir.</ArticleParagraph>
          <ArticleParagraph title="4. Tibbi turizmin inkişafı">Müasir klinikalar, rəqabətədavamlı qiymətlər və yüksək keyfiyyətli tibbi xidmətlər Azərbaycanı tibbi turizm üçün cəlbedici məkana çevirir. Xüsusilə diş həkimliyi, göz cərrahiyyəsi və reabilitasiya sahələrində tələb artır.</ArticleParagraph>
          <ArticleParagraph title="5. Qastroturizm">Azərbaycan mətbəxi UNESCO qeyri-maddi mədəni irs siyahısında yer alır. Qastroturlar, şərab degustasiyaları və kulinariya master-klassları turistlər arasında populyarlaşır.</ArticleParagraph>
        </article>

        <aside className="flex w-full shrink-0 flex-col gap-8 lg:w-[200px]">
          <h2 className="font-sans text-base font-bold text-[#14141a]">Paylaş</h2>
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Facebook-da paylaş" className="flex size-10 items-center justify-center rounded-full border border-black/10 font-inter text-lg font-bold text-[#4d4d59]">f</button>
            <button type="button" aria-label="LinkedIn-də paylaş" className="flex size-10 items-center justify-center rounded-full border border-black/10 font-inter text-[15px] font-bold text-[#4d4d59]">in</button>
            <button type="button" aria-label="Paylaş" className="relative size-10 overflow-hidden rounded-full"><Image src="/news/detail/share-icon.svg" alt="" fill sizes="40px" /></button>
          </div>
          <div className="h-px w-full bg-black/[0.08]" />
          <h2 className="font-sans text-base font-bold text-[#14141a]">Açar sözlər</h2>
          <div className="flex flex-wrap gap-2">
            {['Turizm', '2026', 'MICE', 'Ekoturizm'].map((tag) => <span key={tag} className="rounded-lg bg-[#f2f2f7] px-3 py-1.5 font-sans text-xs font-medium text-[#595966]">{tag}</span>)}
          </div>
        </aside>
      </div>
    </section>
  )
}

function ArticleParagraph({ title, children }: { title: string; children: string }) {
  return <div className="flex flex-col gap-3"><h2 className="font-sans text-xl font-bold leading-normal text-[#14141a]">{title}</h2><p className="font-sans text-[15px] leading-[1.85] text-[#4d4d59]">{children}</p></div>
}
