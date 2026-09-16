import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import FieldGallery from "@/components/FieldGallery";
import Solutions from "@/components/Solutions";
import Diagnostic from "@/components/Diagnostic";
import Brands from "@/components/Brands";
import Clients from "@/components/Clients";
import Store from "@/components/Store";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.legalName,
  alternateName: site.name,
  description:
    "Projeto, fornecimento e implantação de sistemas de irrigação: gotejamento, aspersão, pivô central, bombeamento, automação e filtragem.",
  telephone: "+556132348130",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SIA Quadra 5C",
    addressLocality: "Brasília",
    addressRegion: "DF",
    postalCode: "71200-055",
    addressCountry: "BR",
  },
  areaServed: "Distrito Federal e região",
  sameAs: [site.instagramUrl],
  openingHours: "Mo-Fr 08:00-18:00",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-full overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <Process />
          <FieldGallery />
          <Solutions />
          <Diagnostic />
          <Brands />
          <Clients />
          <Store />
          <About />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
