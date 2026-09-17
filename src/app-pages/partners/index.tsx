import { PartnersHero } from "./hero"
import { PartnersList } from "./list"

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <PartnersHero
        breadcrumb="Ana səhifə / Partnyorlar"
        eyebrow="ƏMƏKDAŞLIQ ŞƏBƏKƏMİZ"
        title="Partnyorlar"
        description={'Dünya üzrə aparıcı otel şəbəkələri, aviasiya təşkilatları və\nturizm tərəfdaşları ilə birbaşa əməkdaşlıq edirik.'}
        metadata="IATA qeydiyyatlı agentlik · 2000+ tərəfdaş · 7/24 əməliyyat dəstəyi"
        actionText="Xidmətlərimiz"
        actionUrl="/services"
      />
      <PartnersList
        partners={[
          {
            name: "Hilton Hotels & Resorts",
            logo: "/partners/hilton.png",
            logoWidth: 116,
            logoHeight: 88,
            description: "Hilton otel şəbəkəsi ilə birbaşa korporativ müqavilə əsasında işləyirik. Xüsusi tariflər, prioritet rezervasiya və loyallıq proqramı üstünlükləri təqdim edirik.",
            benefits: ["Korporativ tariflər", "Prioritet rezervasiya", "Hilton Honors inteqrasiya", "Konfrans zalı təminatı", "Qrup blok rezervasiyaları"],
          },
          {
            name: "Marriott International",
            logo: "/partners/marriott.png",
            logoWidth: 126,
            logoHeight: 99,
            description: "Marriott International şəbəkəsinə daxil olan 30+ brendlə birbaşa əməkdaşlıq edirik — Ritz-Carlton, W Hotels, Sheraton və digərləri daxil.",
            benefits: ["30+ otel brendi", "Bonvoy loyallıq proqramı", "Qrup blok rezervasiyaları", "Tədbir və MICE paketləri", "Dünya üzrə əhatə"],
          },
          {
            name: "Four Seasons Hotels and Resorts",
            logo: "/partners/four-seasons.png",
            logoWidth: 206,
            logoHeight: 116,
            description: "Four Seasons ilə premium seqmentdə əməkdaşlıq — lüks səyahət, VIP qonaq xidməti və xüsusi tədbirlər üçün birbaşa kanal.",
            benefits: ["Lüks seqment", "VIP qonaq xidməti", "Xüsusi tədbir paketləri", "Konsyerj xidməti", "Premium marşrutlar"],
          },
          {
            name: "Hyatt Hotels Corporation",
            logo: "/partners/hyatt.png",
            logoWidth: 196,
            logoHeight: 110,
            description: "Hyatt otelləri ilə korporativ səyahət və MICE tədbirləri üçün birbaşa müqavilə əsasında işləyirik. Qlobal şəbəkə üzrə xüsusi tariflər.",
            benefits: ["Korporativ tariflər", "World of Hyatt inteqrasiya", "MICE paketləri", "Uzunmüddətli qalma", "Konfrans xidmətləri"],
          },
        ]}
      />
    </main>
  )
}
