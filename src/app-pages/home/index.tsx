import { AboutSection } from "./about"
import { HeroSection } from "./hero"
import { MiceSection } from "./mice"
import { NewsSection } from "./news"
import { PartnersSection } from "./partners"
import { ServicesSection } from "./services"
import { newsItems } from "@/app-pages/news/data"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection
        image="/images/hero.webp"
        title={"Azərbaycana\nsəyahətin operatoru"}
        description={"2006-cı ildən incoming turizm, MICE, korporativ səfərlər,\nnəqliyyat, sığorta və tibbi turizm üzrə tam xidmət — 2000-dən çox tərəfdaş agentlik üçün."}
        buttonText="Xidmətlərimiz"
        url="/services"
      />
      <AboutSection
        label="HAQQIMIZDA"
        dotImage="/brand/section-dot.svg"
        title="Tərəfdaş agentliklər, korporativ müştərilər və qonaqlarla işləyirik — marşrutu, oteli, nəqliyyatı və sənədləşməni tam idarə edərək səyahəti sadə və qayğısız edirik."
        stats={[
          { value: "2000+", label: "Yerli və xarici tərəfdaş\nagentlik" },
          { value: "20+", label: "İl Azərbaycan turizm\nbazarında" },
          { value: "50+", label: "Səyahət istiqaməti" },
          { image: "/brand/iata-logo.png", imageAlt: "IATA", label: "Səyahət istiqaməti" },
        ]}
      />
      <ServicesSection
        label="XİDMƏTLƏRİMİZ"
        dotImage="/brand/section-dot.svg"
        services={[
          { title: "Aviabiletlər", description: "IATA agentliyi olaraq bütün istiqamətlər üzrə bilet satışı, qrup tarifləri və dəyişiklik dəstəyi.", icon: "/service-icons/air-tickets.svg", iconAlt: "Aviabiletlər", href: "/services/air-tickets" },
          { title: "Turlar", description: "Şəhər, mədəniyyət, təbiət və qış turları — hazır proqramlar və fərdi marşrutlar.", icon: "/service-icons/tours.svg", iconAlt: "Turlar", href: "/services/tours" },
          { title: "Otellər", description: "Azərbaycan və dünya üzrə müqaviləli otellər, kateqoriya seçimi və korporativ tariflər.", icon: "/service-icons/corporate-travel.svg", iconAlt: "Otellər", href: "/services/hotels" },
          { title: "Səyahət Sığortası", description: "Fərdi və qrup sığorta paketləri, əhatə dairəsi və viza tələblərinə uyğun sənədləşmə.", icon: "/service-icons/insurance.svg", iconAlt: "Səyahət sığortası", href: "/services/insurance" },
          { title: "Transferlər & Ekskursiyalar", description: "VIP və biznes sinif transferlər, qrup avtobusları, bələdçili ekskursiya proqramları.", icon: "/service-icons/transfers.svg", iconAlt: "Transferlər və ekskursiyalar", href: "/services/transfers" },
          { title: "Korporativ Səyahət", description: "Biznes səfərlər, korporativ səyahət həlləri, MICE — konfrans, sərgi və təşviq proqramları.", icon: "/service-icons/excursions.svg", iconAlt: "Korporativ səyahət", href: "/services/corporate-travel" },
        ]}
      />
      <MiceSection
        label="MICE/TƏDBİRLƏR"
        dotImage="/brand/mice-dot.svg"
        title="Tədbirlərin təşkili"
        description="Konfrans, sərgi, korporativ tədbir və təşviq səyahətləri — məkan seçimindən iştirakçı logistikasına qədər tam idarəetmə."
        actionText="Hamısına bax"
        actionUrl="/events"
        note="Tədbir briefinizi göndərin — məkan variantları və əməliyyat planı ilə 24 saat ərzində cavab veririk."
        cards={[
          { title: "Konfrans", description: "Zal, texniki təchizat, qeydiyyat, tərcümə.", href: "/events/conference" },
          { title: "Sərgi", description: "Stend logistikası, delegasiya, B2B görüşlər.", href: "/events/exhibition" },
          { title: "Korporativ tədbir", description: "Yığıncaq, təqdimat, təlim proqramları.", href: "/events/corporate" },
          { title: "Təşviq səyahəti", description: "Komanda proqramları və tematik marşrutlar.", href: "/events/incentive-travel" },
        ]}
      />
      <NewsSection
        label="XƏBƏRLƏR"
        dotImage="/brand/section-dot.svg"
        title="Lorem İmpsum"
        description="Konfrans, sərgi, korporativ tədbir və təşviq səyahətləri — məkan seçimindən iştirakçı logistikasına qədər tam idarəetmə."
        actionText="Hamısına bax"
        actionUrl="/news"
        cards={[
          ...newsItems.map(({ slug, ...card }) => ({ ...card, href: `/news/${slug}` })),
        ]}
      />
      <PartnersSection
        label="ÇALIŞDIĞIMIZ OTEL ŞƏBƏKƏLƏRİ"
        dotImage="/brand/partners-dot.svg"
        actionText="Hamısına bax"
        actionUrl="/partners"
        partners={[
          { name: "Hilton Hotels & Resorts", image: "/partners/hilton.png", width: 116, height: 88 },
          { name: "Marriott", image: "/partners/marriott.png", width: 126, height: 99 },
          { name: "Four Seasons Hotels and Resorts", image: "/partners/four-seasons.png", width: 206, height: 116 },
          { name: "Hyatt", image: "/partners/hyatt.png", width: 196, height: 110 },
        ]}
      />
    </main>
  )
}
