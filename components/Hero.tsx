import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/seco-digital-cutting-systems-dtf-flatbed-cutter-hero.jpg"
          alt="SECO Precision DTF Flatbed Cutter"
          fill
          priority
          className="object-cover grayscale opacity-80"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary text-on-primary font-label font-semibold text-xs px-4 py-2 uppercase tracking-widest mb-8">
            Engineering Excellence
          </div>
          <h1 className="font-headline font-bold text-7xl xl:text-8xl text-on-surface tracking-tighter leading-none mb-6">
            Precision Cutting.
            <br />
            Engineered Value.
          </h1>
          <p className="font-body text-base text-secondary leading-relaxed mb-10 max-w-lg">
            Industrial-grade DTF flatbed cutting systems engineered for US print
            shops. Dual tool heads, AI contour extraction, and 38&quot;×68&quot;
            working area — built to run.
          </p>
          <div className="flex flex-wrap gap-0">
            <a
              href="#quote"
              className="bg-primary text-on-primary font-label font-semibold text-sm px-8 py-4 uppercase tracking-widest hover:bg-primary-container transition-colors"
            >
              Explore Solutions
            </a>
            <a
              href="#specs"
              className="border border-on-surface text-on-surface font-label font-semibold text-sm px-8 py-4 uppercase tracking-widest hover:bg-on-surface hover:text-white transition-colors"
            >
              View Specs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
