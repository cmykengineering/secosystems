import HeroSlider from "@/components/HeroSlider";

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
            US-Adapted • Industrial Grade
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Professional DTF Flatbed Cutters for Serious Print Shops
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            SECO Systems delivers industrial-grade flatbed cutters for DTF & UV DTF post-print finishing —
            engineered for the US market with full support, English documentation, and US-compatible power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-center transition"
            >
              Request a Quote
            </a>
            <a
              href="#specs"
              className="border border-gray-500 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-center transition"
            >
              View Specifications
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400">38&quot;×68&quot;</div>
              <div className="text-xs text-gray-400 mt-1">Working Area</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">800mm/s</div>
              <div className="text-xs text-gray-400 mt-1">Cutting Speed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">0.05mm</div>
              <div className="text-xs text-gray-400 mt-1">Precision</div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <HeroSlider />

        </div>
      </div>
    </section>
  );
}
