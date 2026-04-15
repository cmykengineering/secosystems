import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Engineering from "@/components/Engineering";
import Series from "@/components/Series";
import Support from "@/components/Support";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SECO Systems",
    alternateName: "SECO Precision",
    url: "https://secosystems.com",
    logo: "https://secosystems.com/images/og-image.jpg",
    parentOrganization: {
      "@type": "Organization",
      name: "CMYK Engineering",
      url: "https://cmykengineering.com",
    },
    areaServed: "US",
    description:
      "Industrial DTF and UV DTF flatbed cutting systems for US print shops, apparel decorators, and DTF producers.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SECO Systems DTF Flatbed Cutter",
    description:
      'Industrial-grade DTF & UV DTF flatbed cutter for US print shops. 38"×68" working area, AI contour extraction, dual tool head, vacuum suction, auto-feed conveyor.',
    brand: {
      "@type": "Brand",
      name: "SECO Systems",
    },
    manufacturer: {
      "@type": "Organization",
      name: "CMYK Engineering",
      url: "https://cmykengineering.com",
    },
    url: "https://secosystems.com",
    image:
      "https://secosystems.com/images/seco-digital-cutting-systems-dtf-flatbed-cutter-hero.jpg",
    category: "Industrial Cutting Equipment",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Print Shops, DTF Producers, Apparel Decorators",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: "SECO Systems",
      },
    },
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Engineering />
        <Series />
        <Support />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
