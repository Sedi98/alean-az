import { ServicesHero } from "./hero"
import { ServicesFilters } from "./filters"
import { FlightsSection } from "./flights"
import { ToursSection } from "./tours"
import { HotelsSection } from "./hotels"
import { InsuranceSection } from "./insurance"
import { CorporateSection } from "./corporate"
import { MedicalTourismSection } from "./medical-tourism"
import { AdditionalServicesSection } from "./additional"

export default function ServicesPage({ locale = "az" }: { locale?: string }) {
  void locale
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero
        breadcrumb="Ana səhifə / Xidmətlər"
        eyebrow="TAM XİDMƏT TUR OPERATORU"
        title={'Bir nöqtədən bütün\nsəyahət xidmətləri'}
        description={'Fəaliyyətimizin əsas istiqaməti incoming turizm olmaqla yanaşı,\nbiz müxtəlif səyahət ehtiyaclarına uyğun kompleks turizm həlləri təqdim edirik:'}
        metadata={'IATA qeydiyyatlı agentlik · 2000+ tərəfdaş · 7/24 əməliyyat dəstəyi'}
      />
      <ServicesFilters
        filters={[
          "Aviabiletlər",
          "Turlar",
          "Otellər",
          "Sığorta",
          "Transfer & Ekskurisya",
          "Korporativ & Mice",
          "Tibbi Turizm",
          "Viza Dəstəyi",
        ]}
      />
      <FlightsSection
        number="01"
        category="Aviaşirkət"
        title="Aviaşirkət və Bilet Xidmətləri"
        description={[
          "ALEAN COMPANY yerli və beynəlxalq aviaşirkətlərlə əməkdaşlıq edərək aviaşirkət və bilet xidmətləri üzrə geniş seçim və çevik səyahət həlləri təqdim edir. Müxtəlif istiqamətlər üzrə aviabiletlərin axtarışı, bronlaşdırılması və rəsmiləşdirilməsi xidmətlərini həm müştərilər üçün həyata keçiririk.",
          "Müxtəlif aviaşirkətlər və beynəlxalq tərəfdaşlıq şəbəkəmiz sayəsində müştərilərimizə müxtəlif marşrutlar, tariflər və səyahət seçimləri təqdim etmək imkanına malikik. Biz həm fərdi səyahətçilərin, həm korporativ müştərilərin, həm də turizm şirkətlərinin tələblərinə uyğun aviabilet həlləri təqdim edirik.",
          "ALEAN COMPANY-nin öz onlayn bronlaşdırma sistemi aviabiletlərin operativ şəkildə axtarılması, seçilməsi və bronlaşdırılmasını təmin edərək səyahətin planlaşdırılması prosesini daha çevik və rahat edir.",
        ]}
        features={[
          { title: "Qrup biletləri", description: "10+ sərnişin üçün endirimli blok tariflər" },
          { title: "Biznes sinif", description: "Korporativ müqavilə tarifləri və lounge dəstəyi" },
          { title: "Dəyişiklik dəstəyi", description: "Tarix dəyişikliyi və refund prosesinin idarəsi" },
          { title: "Çarter", description: "Böyük qruplar üçün çarter reyslərin təşkili" },
        ]}
        mainImage="/services/flight-ticket.jpg"
        secondaryImages={["/services/flight-detail-1.jpg", "/services/flight-detail-2.jpg"]}
      />
      <ToursSection
        number="02"
        title="Tours"
        description="Hazır proqramlar və fərdi marşrutlar — incoming qonaqlar üçün Azərbaycan üzrə, yerli müştərilər üçün isə xaricə. Bələdçi, giriş biletləri və nəqliyyat paketə daxildir."
        image="/services/tours.jpg"
        categories={["Mədəni turlar", "İstirahət paketləri", "Təhsil turları", "Qış proqramları", "Təbiət və etno", "İstirahət paketləri", "Qrup turları"]}
      />
      <HotelsSection
        number="03"
        title="Hotels"
        description="Azərbaycan və dünya üzrə birbaşa müqaviləli otellər. Qrup blokları, korporativ tariflər və tədbir zalı ilə birlikdə paket rezervasiyaları."
        features={[
          { title: "5★ və lüks", description: "Beynəlxalq şəbəkə otelləri" },
          { title: "Biznes otellər", description: "Konfrans zalı olan otellər" },
          { title: "Kurort", description: "Dağ, sahil və SPA kurortları" },
          { title: "Butik və apart", description: "Uzunmüddətli qalma variantları" },
        ]}
        mainImage="/services/hotels.jpg"
        secondaryImages={["/services/hotels-detail-1.jpg", "/services/hotels-detail-2.jpg"]}
      />
      <InsuranceSection
        number="04"
        title="Səyahət Sığortası"
        description={[
          "ALEAN COMPANY müştərilərinin səyahətləri zamanı təhlükəsizliyini təmin etmək məqsədilə səyahət sığortası xidmətləri təqdim edir. Yerli və beynəlxalq sığorta tərəfdaşları ilə əməkdaşlıq çərçivəsində müxtəlif səyahət məqsədlərinə və istiqamətlərinə uyğun sığorta həlləri təklif edirik.",
          "ALEAN COMPANY müştərilərinin səyahətləri zamanı təhlükəsizliyini təmin etmək məqsədilə səyahət sığortası xidmətləri təqdim edir. Yerli və beynəlxalq sığorta tərəfdaşları ilə əməkdaşlıq çərçivəsində müxtəlif səyahət məqsədlərinə və istiqamətlərinə uyğun sığorta həlləri təklif edirik.",
          "ALEAN COMPANY səyahətin planlaşdırılmasından başlayaraq səfər müddətində müştərilərinə etibarlı və kompleks xidmət göstərməyi əsas prioritetlərindən biri hesab edir.",
        ]}
        features={[
          { title: "Tibbi xərclər və hospitalizasiya" },
          { title: "Təcili yardım və repatriasiya" },
          { title: "Baqajın itməsi və gecikməsi" },
          { title: "Səfərin ləğvi və gecikməsi" },
        ]}
      />
      <CorporateSection
        number="06"
        title="Corporate Travel & MICE"
        description="Biznes səfərlərin idarəsi, korporativ müqavilə tarifləri və tədbirlərin tam təşkili. Bir əlaqə nöqtəsi, bir hesabat, bir müqavilə."
        features={[
          { title: "Biznes səfərlər", description: "Bilet, otel, transfer və viza — vahid idarəetmə və aylıq hesabat." },
          { title: "Konfrans və forum", description: "Zal, texniki təchizat, iştirakçı qeydiyyatı və sinxron tərcümə." },
          { title: "Sərgi və delegasiya", description: "Stend logistikası, B2B görüşlər və delegasiya proqramı." },
          { title: "Təşviq səyahətləri", description: "Komanda proqramları, tematik marşrutlar və qala-şam." },
        ]}
      />
      <MedicalTourismSection
        number="07"
        title="Medical Tourism"
        description="Müayinə, diaqnostika, müalicə və reabilitasiya üçün klinika seçimi və tam səyahət dəstəyi — tərcüməçi, müşayiət və qayıdış planlaması ilə."
        image="/services/medical-tourism.jpg"
        features={[
          { number: "01", title: "Sorğu və tibbi sənədlərin təhlili", description: "10+ sərnişin üçün endirimli blok tariflər" },
          { number: "02", title: "Təklif və büdcə", description: "Müalicə, otel, transfer və sığorta daxil paket qiymət" },
          { number: "03", title: "Səfər və müşayiət", description: "Qarşılanma, tərcüməçi və klinikaya müşayiət" },
          { number: "04", title: "Reabilitasiya və qayıdış", description: "Sanatoriya variantları və qayıdış logistikası" },
        ]}
      />
      <AdditionalServicesSection
        number="08"
        title="Səfəri tamamlayan dəstək"
        services={[{ title: "Viza dəstəyi" }, { title: "Tədbir və restoran" }, { title: "7/24 əməliyyat dəstəyi" }]}
      />
    </main>
  )
}
