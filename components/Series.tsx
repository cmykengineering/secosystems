const series = [
  {
    name: "S-Series",
    fit: "For shops moving from manual finishing to a dedicated cutting workflow.",
    highlight: false,
    features: [
      '38" × 68" working area',
      "Precision contour cutting",
      "Vacuum hold-down table",
      "USB / LAN connectivity",
      "A strong entry point for growing production",
    ],
  },
  {
    name: "Pro-Series",
    fit: "The best balance of speed, automation, and day-to-day production value.",
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
    fit: "For heavier-output shops that need a more aggressive production setup.",
    highlight: false,
    features: [
      "Expanded production configuration",
      "Dual-head cutting workflow",
      "Industrial vacuum system",
      "Advanced conveyor handling",
      "Built for higher-volume shop environments",
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
              Three clear buying paths. One production goal.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Instead of forcing buyers through a vague industrial equipment process, SECO is positioned as a clear configuration decision: choose the throughput, automation level, and support fit your shop needs now.
            </p>
          </div>
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
          >
            Get configuration help
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {series.map((s) => (
            <article
              key={s.name}
              className={`flex h-full flex-col rounded-[28px] border p-8 ${
                s.highlight
                  ? "border-[#1693ff] bg-slate-950 text-white shadow-[0_24px_80px_rgba(2,12,27,.16)]"
                  : "border-slate-200 bg-white text-slate-950 shadow-sm"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-headline text-3xl font-bold tracking-tight">{s.name}</h3>
                  <p className={`mt-3 text-sm leading-6 ${s.highlight ? "text-white/72" : "text-slate-600"}`}>{s.fit}</p>
                </div>
                {s.highlight && (
                  <div className="shrink-0 rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#71bdff]">
                    Most popular
                  </div>
                )}
              </div>

              <div className={`mt-8 rounded-2xl border px-4 py-3 text-xs uppercase tracking-[0.16em] ${s.highlight ? "border-white/10 bg-white/5 text-white/54" : "border-slate-200 bg-slate-50 text-slate-500"}`}>
                Recommended fit for {s.name.replace("-", " ")}
              </div>

              <ul className="mt-8 space-y-4">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-6">
                    <span className={`mt-[9px] h-2 w-2 rounded-full ${s.highlight ? "bg-[#71bdff]" : "bg-[#1693ff]"}`} />
                    <span className={s.highlight ? "text-white/80" : "text-slate-700"}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <a
                  href="#quote"
                  className={`inline-flex w-full items-center justify-center rounded-md px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] transition ${
                    s.highlight
                      ? "bg-[#1693ff] text-white hover:bg-[#3aa5ff]"
                      : "border border-slate-300 text-slate-950 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                  }`}
                >
                  Request pricing
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
