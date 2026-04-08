import Image from "next/image";

const images = [
  {
    src: "/images/seco-flatbed-dtf-cutter-overview-rear.jpg",
    alt: "SECO flatbed DTF cutter - full machine overview",
    caption: "Industrial-grade flatbed platform",
  },
  {
    src: "/images/seco-flatbed-dtf-cutter-overview-front.jpg",
    alt: "SECO DTF cutter - front view with conveyor belt",
    caption: "Auto-feed conveyor system",
  },
  {
    src: "/images/seco-dtf-cutter-auto-feed-waste-collection.jpg",
    alt: "SECO DTF cutter - auto feed and waste collection system",
    caption: "Auto waste collection basket",
  },
  {
    src: "/images/seco-dtf-cutting-table-conveyor-belt.jpg",
    alt: "SECO DTF cutting table with conveyor belt and vacuum suction",
    caption: "Vacuum suction cutting table",
  },
  {
    src: "/images/seco-dual-tool-head-precision-cutting.jpg",
    alt: "SECO dual tool head T1 T2 for precision DTF cutting",
    caption: "Dual tool head T1/T2",
  },
  {
    src: "/images/seco-cutting-tool-closeup-t1-t2-heads.jpg",
    alt: "SECO cutting tool closeup - T1 T2 precision cutting heads",
    caption: "Precision cutting heads closeup",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Engineered for Precision
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Every component built to industrial standards — from dual cutting heads to auto-feed conveyor.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img) => (
            <div key={img.src} className="group relative overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm font-medium">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
