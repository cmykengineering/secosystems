import Image from "next/image";

const points = [
  "Installation assistance and operator training from our US team",
  "Same-day parts shipping from our domestic warehouse",
  "Remote diagnostics, firmware updates, and cut profile library",
];

export default function Support() {
  return (
    <section id="support" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div className="font-label text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            US-Based Support
          </div>
          <h2 className="font-headline font-bold text-4xl text-on-surface tracking-tight mb-6">
            Expert Support.
            <br />
            Parts on the Shelf.
          </h2>
          <p className="font-body text-sm text-secondary leading-relaxed mb-8">
            Every SECO system ships with a dedicated support engagement. Our US
            engineering team is on call — not a ticketing queue.
          </p>
          <ul className="space-y-4 mb-10">
            {points.map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">
                  check_circle
                </span>
                <span className="font-body text-sm text-secondary leading-relaxed">
                  {pt}
                </span>
              </li>
            ))}
          </ul>
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
            alt="SECO flatbed DTF cutter — rear overview"
            fill
            className="object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}
