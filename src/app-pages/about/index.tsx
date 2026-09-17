import { AboutHero } from "./hero"
import { AboutContent } from "./content"
import { IataSection } from "./iata"
import { MissionVisionSection } from "./mission"
import { WhyAleanSection } from "./why-alean"
import { TimelineSection } from "./timeline"
import { PartnersSection } from "@/app-pages/home/partners"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero image="/about-hero.png" breadcrumb="Ana səhifə  /  Haqqımızda" title="Haqqımızda" />
      <AboutContent
        label="Biz kimik?"
        dotImage="/about/about-dot.svg"
        title="ALEAN COMPANY 2006-cı ildən etibarən Azərbaycanın turizm bazarında fəaliyyət göstərən və peşəkar turizm xidmətləri təqdim edən şirkətdir."
        columns={[
          "ALEAN COMPANY 2006-cı ildən etibarən Azərbaycanın turizm bazarında fəaliyyət göstərən və peşəkar turizm xidmətləri təqdim edən şirkətdir.\n\nŞirkətimiz 2 000-dən çox yerli Azərbaycan turizm şirkəti və çoxsaylı beynəlxalq tərəfdaşlarla uğurlu əməkdaşlıq edərək geniş və etibarlı tərəfdaşlıq şəbəkəsi formalaşdırıb.",
          "Müasir texnologiyalara əsaslanan öz onlayn bronlaşdırma sistemimiz tərəfdaşlarımıza və müştərilərimizə turizm xidmətlərini çevik, operativ və rahat şəkildə seçmək və bronlaşdırmaq imkanı təqdim edir.",
        ]}
        stats={[
          { value: "2000+", label: "Yerli və xarici tərəfdaş\nagentlik" },
          { value: "20+", label: "İl Azərbaycan turizm\nbazarında" },
          { value: "50+", label: "Səyahət istiqaməti" },
          { image: "/about/iata.png", imageAlt: "IATA", label: "Səyahət istiqaməti" },
        ]}
        decorativeImageTop="/about/image-about-bg.png"
        decorativeImageBottom="/about/image-about-bg-bottom.png"
      />
      <IataSection
        logo="/about/iata-section.png"
        title="International Air Transport Association"
        description="ALEAN Tour Operator IATA-nın tam qeydiyyatlı agentliyidir. Bu status bizə dünya üzrə bütün aviaşirkətlərlə birbaşa bilet satışı, qrup tarifləri və çarter əməliyyatları aparmağa imkan verir."
        benefits={[
          "Tam lisenziyalı agentlik",
          "Birbaşa bilet satışı",
          "Qrup və çarter tarifləri",
          "Dünya üzrə bütün aviaşirkətlər",
          "Sertifikatlı agentlik statusu",
        ]}
      />
      <MissionVisionSection
        label="Missiyamız"
        dotImage="/about/about-dot.svg"
        storyImage="/about/mission-story.png"
        storyTitle="Hekayəmiz"
        storyParagraphs={[
          "2006-cı ildən etibarən ALEAN Azərbaycanın turizm sektorunda fəaliyyət göstərir. Fəaliyyətimizə başladığımız gündən etibarən əsas dəyərlərimiz etibarlılıq, peşəkarlıq, keyfiyyət və müştəri məmnuniyyəti olub.",
          "İllər ərzində qazandığımız təcrübə, formalaşdırdığımız güclü tərəfdaşlıq şəbəkəsi və müasir yanaşmamız sayəsində ALEAN davamlı inkişaf edən və etibarlı turizm şirkətinə çevrilib.",
          "Bu gün biz fərdi və korporativ səyahətlərdən tutmuş tur paketləri, avia bilet, otel, transfer, sığorta və digər turizm xidmətlərinədək kompleks və müasir səyahət həlləri təqdim edirik.",
          "2006-cı ildən bu günə — təcrübəmizlə güvən yaradır, innovasiyalarla gələcəyə doğru irəliləyirik.",
        ]}
        missionTitle="Missiyamız"
        missionParagraphs={["Səyahəti daha əlçatan, rahat, maraqlı və qayğısız etmək bizim əsas missiyamızdır. 2006-cı ildən etibarən Azərbaycanın turizm sektorunda fəaliyyət göstərən ALEAN Tour Operator, etibarlılıq, peşəkarlıq və yüksək xidmət standartlarını əsas tutaraq davamlı şəkildə inkişaf edir. Müştərilərimizin və tərəfdaşlarımızın etimadını qazanaraq, turizm sahəsində güvənilən və dayanıqlı tərəfdaş kimi mövqeyimizi möhkəmləndirmişik. İstər istirahət, istər işgüzar səfər, istərsə də fərdi və korporativ səyahət olsun — hər bir səyahəti komfortlu, keyfiyyətli və yaddaqalan təcrübəyə çevirmək üçün peşəkar komandamızla çalışırıq.", "Sizin səyahətiniz bizim məsuliyyətimizdir."]}
        visionTitle="Vizyonumuz"
        visionParagraphs={["ALEAN-ın vizyonu Azərbaycanın və regionun aparıcı, innovativ və etibarlı turizm şirkətlərindən birinə çevrilmək, müasir texnologiyalar və yüksək xidmət standartları əsasında səyahət təcrübəsini yeni mərhələyə yüksəltməkdir. Biz müştərilər, korporativ tərəfdaşlar və beynəlxalq turizm ekosistemi üçün dayanıqlı, rəqəmsal və uzunmüddətli əməkdaşlıqlara əsaslanan vahid səyahət platforması formalaşdırmağı hədəfləyirik.", "Məqsədimiz yalnız səyahət xidmətləri təqdim etmək deyil, insanları, biznesləri və yeni istiqamətləri birləşdirən müasir turizm ekosistemi yaratmaqdır. Regionun aparıcı turizm mərkəzinə çevirmək və dünya standartlarında xidmət göstərmək."]}
      />
      <WhyAleanSection
        label="NİYƏ ALEAN"
        dotImage="/about/why/dot.svg"
        title="Etibarlı əməliyyat"
        description={"Tərəfdaş agentliklər və korporativ müştərilər üçün marşrutu, oteli, nəqliyyatı və\nsənədləşməni tam idarə edirik."}
        cards={[
          { title: "Etibarlılıq", description: "Qüsursuz reputasiya, şəffaf müqavilələr və vaxtında icra.", number: "01", icon: "/about/why/security-card.svg" },
          { title: "Fərdi yanaşma", description: "Hər müştəri üçün ayrıca qurulan marşrut, büdcə və xidmət paketi.", number: "02", icon: "/about/why/user-tick.svg" },
          { title: "Şəbəkə", description: "2000+ tərəfdaş agentlik, otel və nəqliyyat provayderi ilə birbaşa əməkdaşlıq.", number: "03", icon: "/about/why/global.svg" },
          { title: "Texnologiya", description: "Öz bronlaşdırma sistemimiz və rəqəmsal inteqrasiyaya hazır infrastruktur.", number: "04", icon: "/about/why/wifi-square.svg" },
        ]}
      />
     
      <TimelineSection
        title="Tariximiz"
        subtitle="2006-cı ildən bu günə qədər keçdiyimiz yol"
        dotImage="/about/timeline-dot.svg"
        entries={[
          { year: "2006", title: "Təsis edilmə", description: "ALEAN Tour Operator Bakıda fəaliyyətə başladı. İlk illərdə incoming turizm üzrə ixtisaslaşaraq Azərbaycanı dünyaya tanıtdı.", side: "left" },
          { year: "2010", title: "IATA qeydiyyatı", description: "Beynəlxalq Hava Nəqliyyatı Assosiasiyasının (IATA) tam üzvü olaraq qeydiyyatdan keçdi və aviabilet satışına başladı.", side: "right" },
          { year: "2014", title: "Korporativ xidmətlər", description: "MICE tədbirləri, konfrans təşkili və korporativ səyahət həlləri portfelinə əlavə olundu.", side: "left" },
          { year: "2018", title: "Beynəlxalq genişlənmə", description: "1000-dən çox xarici tərəfdaş agentliklə əməkdaşlıq müqavilələri imzalandı. Hilton, Marriott, Hyatt ilə birbaşa müqavilələr bağlandı.", side: "right" },
          { year: "2027", title: "Tibbi turizm", description: "Tibbi turizm və səyahət sığortası xidmətləri əlavə olunaraq xidmət çeşidi genişləndirildi.", side: "left" },
          { year: "2024", title: "2000+ tərəfdaş", description: "Dünya üzrə 2000-dən çox agentliklə əməkdaşlıq edən regional lider tour operator statusunu möhkəmləndirdi.", side: "right" },
        ]}
      />
       <PartnersSection
        label="PARTNYORLAR"
        dotImage="/brand/partners-dot.svg"
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
