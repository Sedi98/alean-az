import { NewsHero } from "./hero"
import { MediaSection } from "./media"
import { newsItems } from "./data"

export default function NewsPage() {
  const cards = Array.from({ length: 3 }, () => newsItems.map((item) => ({ ...item, href: `/news/${item.slug}` }))).flat()

  return (
    <main className="min-h-screen bg-white">
      <NewsHero breadcrumb="Ana səhifə / Xəbərlər" title="Xəbərlər" description={'Turizm sektorundakı son yeniliklər, ALEAN-ın tədbirləri,\nsəyahət məsləhətləri və sektora dair analitik yazılar.'} metadata="IATA qeydiyyatlı agentlik · 2000+ tərəfdaş · 7/24 əməliyyat dəstəyi" actionText="Xidmətlərimiz" actionUrl="/services" />
      <MediaSection filters={["Rəsmi xəbərlər", "Turlar", "Vlog xəbərlər"]} cards={cards} />
    </main>
  )
}
