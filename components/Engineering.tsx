import Image from "next/image";

const engineeringImages = [
  {
    src: "/images/seco-cutting-tool-closeup-t1-t2-heads.jpg",
    alt: "SECO T1/T2 dual tool head closeup",
  },
  {
    src: "/images/seco-dual-tool-head-precision-cutting.jpg",
    alt: "SECO dual tool head assembly",
  },
  {
    src: "/images/seco-dtf-cutting-table-conveyor-belt.jpg",
    alt: "SECO conveyor belt cutting table",
  },
  {
    src: "/images/seco-dtf-cutter-auto-feed-waste-collection.jpg",
    alt: "SECO auto-feed and waste collection system",
  },
];

const items = [
  {
    title: "Dual tool architecture",
    desc: "Independent T1/T2 head movement helps maintain precise contour work while supporting a more production-ready workflow.",
  },
  {
    title: "Vacuum hold-down table",
    desc: "Stable material positioning reduces drift and supports cleaner finishing on thin media, DTF film, and similar substrates.",
  },
  {
    title: "AI contour extraction",
    desc: "Optical registration helps the system detect printed marks and generate cut paths with less manual intervention.",
  },
  {
    title: "Auto-feed workflow",
    desc: "Integrated conveyor movement is built to keep output moving and reduce time lost between jobs.",
  },
];

export default function Engineering() {
  return (
    <section id="specs" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:items-start">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#71bdff]">
              Technical positioning
            </div>
            <h2 className="mt-4 max-w-3xl font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Industrial capability without unnecessary complexity.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
              SECO is positioned for shops that need more than an entry-level cutter but want a cleaner buying decision than the usual industrial equipment process.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {items.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                  <h3 className="font-headline text-xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-md bg-[#1693ff] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3aa5ff]"
              >
                Request full specs
              </a>
              <a
                href="#support"
                className="inline-flex items-center justify-center rounded-md border border-white/14 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/5"
              >
                See support model
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {engineeringImages.map((img, i) => (
              <div key={i} className="relative aspect-[0.95/1] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
