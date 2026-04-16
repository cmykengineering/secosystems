const series = [
  {
    name: "S-Series",
    tagline: "Core production configuration",
    highlight: false,
    features: [
      '38" × 68" working area',
      "Precision contour cutting",
      "Vacuum table",
      "USB / LAN connectivity",
      "Designed for growing shops",
    ],
  },
  {
    name: "Pro-Series",
    tagline: "Best balance of speed and flexibility",
    highlight: true,
    features: [
      '38" × 68" working area',
      "Dual tool heads",
      "AI contour extraction",
      "Vacuum hold-down",
      "Auto-feed conveyor",
      "Priority onboarding support",
    ],
  },
  {
    name: "Ultra-Series",
    tagline: "For heavier production environments",
    highlight: false,
    features: [
      "Expanded production configuration",
      "Dual-head cutting workflow",
      "Industrial vacuum system",
      "Advanced conveyor handling",
      "Higher-volume shop fit",
    ],
  },
];

export default function Series() {
  return (
    <section id="series" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1693ff]">
              Configurations
            </div>
            <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Choose the system that fits your production stage.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The lineup is structured to keep the buying decision simple: start with the right throughput and support level, then match the final configuration to your shop.
            </p>
          </div>
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
          >
            Compare options
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {series.map((s) => (
            <article
              key={s.name}
              className={`rounded-3xl border p-8 ${
                s.highlight
                  ? "border-[#1693ff] bg-slate-950 text-white shadow-[0_24px_80px_rgba(2,12,27,.16)]"
                  : "border-slate-200 bg-slate-50 text-slate-950"
              }`}
            >
              {s.highlight && (
                <div className="mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#71bdff]">
                  Recommended
                </div>
              )}
              <h3 className="font-headline text-3xl font-bold tracking-tight">{s.name}</h3>
              <p className={`mt-2 text-sm ${s.highlight ? "text-white/68" : "text-slate-600"}`}>{s.tagline}</p>
              <ul className="mt-8 space-y-4">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-6">
                    <span className={`mt-2 h-1.5 w-1.5 rounded-full ${s.highlight ? "bg-[#71bdff]" : "bg-[#1693ff]"}`} />
                    <span className={s.highlight ? "text-white/78" : "text-slate-700"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-md px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] transition ${
                  s.highlight
                    ? "bg-[#1693ff] text-white hover:bg-[#3aa5ff]"
                    : "border border-slate-300 text-slate-950 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                }`}
              >
                Request pricing
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
