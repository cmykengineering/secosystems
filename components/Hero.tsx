import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/seco-digital-cutting-systems-dtf-flatbed-cutter-hero.jpg"
          alt="SECO Precision DTF Flatbed Cutter — industrial cutting system"
          fill
          priority
          className="object-cover grayscale"
        />
      </div>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-32">
        <div className="max-w-2xl">
          <h1 className="font-headline font-bold text-6xl xl:text-7xl text-white tracking-tighter leading-none mb-6">
            Precision Cutting.
            <br />
            Engineered Value.
          </h1>
          <p className="font-body text-base text-white/70 leading-relaxed mb-10 max-w-lg">
            Industrial DTF flatbed cutting systems built for US print shops.
            Dual tool heads, AI contour extraction, 38&quot;×68&quot; working
            area.
          </p>
          <div className="flex flex-wrap gap-0 mb-16">
            <a
              href="#quote"
              className="bg-primary text-on-primary font-label font-semibold text-sm px-8 py-4 uppercase tracking-widest hover:bg-primary-container transition-colors"
            >
              Request a Quote
            </a>
            <a
              href="#specs"
              className="border border-white/40 text-white font-label font-semibold text-sm px-8 py-4 uppercase tracking-widest hover:border-white hover:bg-white/10 transition-colors"
            >
              View Specs
            </a>
          </div>

          {/* Stat bar */}
          <div className="flex items-start gap-8 pt-8 border-t border-white/20">
            <div>
              <div className="font-headline font-bold text-2xl text-white tracking-tight">
                ±0.1mm
              </div>
              <div className="font-label text-xs uppercase tracking-widest text-white/50 mt-1">
                Contour Accuracy
              </div>
            </div>
            <div className="w-px self-stretch bg-white/20" />
            <div>
              <div className="font-headline font-bold text-2xl text-white tracking-tight">
                38&quot;×68&quot;
              </div>
              <div className="font-label text-xs uppercase tracking-widest text-white/50 mt-1">
                Working Area
              </div>
            </div>
            <div className="w-px self-stretch bg-white/20" />
            <div>
              <div className="font-headline font-bold text-2xl text-white tracking-tight">
                Dual Heads
              </div>
              <div className="font-label text-xs uppercase tracking-widest text-white/50 mt-1">
                T1 / T2 Carriage
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
