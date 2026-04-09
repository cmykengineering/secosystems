import Image from "next/image";

export default function Support() {
  return (
    <section className="bg-surface-container-low py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <span className="material-symbols-outlined text-primary text-5xl block mb-6">
            support_agent
          </span>
          <div className="font-label text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            US-Based Support
          </div>
          <h2 className="font-headline font-bold text-4xl text-on-surface tracking-tight mb-6">
            Expert Support, Parts on the Shelf
          </h2>
          <p className="font-body text-sm text-secondary leading-relaxed mb-4">
            Our US engineering team provides installation assistance, operator
            training, and remote diagnostics. Replacement parts ship same-day
            from our domestic warehouse.
          </p>
          <p className="font-body text-sm text-secondary leading-relaxed mb-10">
            Every system ships with full documentation, calibration tools, and
            access to our customer portal for firmware updates and cut profiles.
          </p>
          <a
            href="#quote"
            className="inline-block bg-primary text-on-primary font-label font-semibold text-sm px-8 py-4 uppercase tracking-widest hover:bg-primary-container transition-colors"
          >
            Talk to an Engineer
          </a>
        </div>

        {/* Right: image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/seco-flatbed-dtf-cutter-overview-rear.jpg"
            alt="SECO flatbed DTF cutter rear overview"
            fill
            className="object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}
