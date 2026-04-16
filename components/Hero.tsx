import Image from "next/image";

const highlights = [
  {
    value: '38" × 68"',
    label: "Working area",
  },
  {
    value: "Dual heads",
    label: "T1 / T2 carriage",
  },
  {
    value: "AI contour",
    label: "Optical registration",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#081018] text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/seco-hero-hires.png"
          alt="SECO Systems industrial DTF flatbed cutter for US print shops"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,18,.94)_0%,rgba(5,11,18,.82)_40%,rgba(5,11,18,.42)_74%,rgba(5,11,18,.18)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(33,150,243,.16),transparent_34%)]" />

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-16 pt-32 md:min-h-[840px]">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm">
              US-adapted industrial cutting systems
            </div>

            <h1 className="max-w-2xl font-headline text-5xl font-bold leading-[0.94] tracking-[-0.04em] text-white sm:text-6xl xl:text-7xl">
              Industrial DTF cutting capacity for shops ready to scale.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
              SECO Systems brings large-format flatbed cutting, dual-head precision, and a production-ready workflow into a cleaner buying decision for US print shops.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-md bg-[#1693ff] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3aa5ff]"
              >
                Request pricing
              </a>
              <a
                href="#series"
                className="inline-flex items-center justify-center rounded-md border border-white/18 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
              >
                Explore configurations
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-sm"
                >
                  <div className="font-headline text-2xl font-bold tracking-tight text-white">{item.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0b1620]/78 p-6 shadow-2xl backdrop-blur-md">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#71bdff]">Why shops choose SECO</div>
            <div className="mt-4 space-y-4">
              {[
                "A larger-format workflow designed for real production throughput",
                "Cleaner contour cutting with dual-head precision and optical registration",
                "A buying experience positioned around clarity, fit, and implementation support",
              ].map((point) => (
                <div key={point} className="flex gap-3 border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                  <span className="mt-[9px] h-2 w-2 rounded-full bg-[#1693ff]" />
                  <p className="text-sm leading-6 text-white/74">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/8 bg-white/4 p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/48">Best fit</div>
              <div className="mt-2 text-sm leading-6 text-white/78">
                Small and mid-size US print shops that want to move beyond manual trimming and entry-level cutter limitations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
