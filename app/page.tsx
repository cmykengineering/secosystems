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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Gallery />
      <Specs />
      <LeadForm />
      <Footer />
    </main>
  );
}
