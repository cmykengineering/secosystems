import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Specs from "@/components/Specs";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SECO Systems — Professional DTF Flatbed Cutters for US Print Shops",
  description:
    "Industrial-grade DTF & UV DTF flatbed cutters adapted for the US market. Larger cutting area, precision AI contour, vacuum suction. Request a quote today.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "SECO Systems DTF Flatbed Cutter",
  description:
    "Industrial-grade DTF & UV DTF flatbed cutter for US print shops. 38\"×68\" working area, AI contour extraction, dual tool head, vacuum suction, auto-feed conveyor.",
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
  image: "https://secosystems.com/images/seco-digital-cutting-systems-dtf-flatbed-cutter-hero.jpg",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    seller: {
      "@type": "Organization",
      name: "SECO Systems",
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <Hero />
        <Features />
        <Gallery />
        <Specs />
        <LeadForm />
        <Footer />
      </main>
    </>
  );
}
