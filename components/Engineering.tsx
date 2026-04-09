import Image from "next/image";

const engineeringImages = [
  {
    src: "/images/seco-cutting-tool-closeup-t1-t2-heads.jpg",
    alt: "Dual tool head precision cutting",
  },
  {
    src: "/images/seco-dual-tool-head-precision-cutting.jpg",
    alt: "SECO dual tool head assembly",
  },
  {
    src: "/images/seco-dtf-cutting-table-conveyor-belt.jpg",
    alt: "Conveyor belt cutting table",
  },
  {
    src: "/images/seco-dtf-cutter-auto-feed-waste-collection.jpg",
    alt: "Auto-feed and waste collection system",
  },
];

const items = [
  {
    num: "01",
    title: "Servo-Driven Dual Heads",
    desc: "Independent T1/T2 tool carriages with ±0.1mm repeatability across the full cutting area.",
  },
  {
    num: "02",
    title: "Industrial Vacuum Hold-Down",
    desc: "High-capacity vacuum table eliminates material shift on DTF films and thin media.",
  },
  {
    num: "03",
    title: "AI Contour Extraction",
    desc: "On-board optical registration reads printed registration marks and auto-generates cut paths.",
  },
];

export default function Engineering() {
  return (
    <section id="specs" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div>
          <div className="font-label text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            The Architecture of Power
          </div>
          <h2 className="font-headline font-bold text-4xl text-on-surface tracking-tight mb-4">
            Uncompromising Component Quality
          </h2>
          <p className="font-body text-sm text-secondary leading-relaxed mb-12">
            Every subsystem is selected for durability, precision, and
            serviceability in a production shop environment.
          </p>
          <div className="space-y-8">
            {items.map((item) => (
              <div key={item.num} className="flex gap-6">
                <div className="font-headline font-bold text-3xl text-outline-variant flex-shrink-0 w-12">
                  {item.num}
                </div>
                <div>
                  <div className="font-headline font-semibold text-base text-on-surface mb-1">
                    {item.title}
                  </div>
                  <p className="font-body text-sm text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 2x2 image grid */}
        <div className="grid grid-cols-2 gap-2">
          {engineeringImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover grayscale group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
