const series = [
  {
    name: "S-Series",
    tagline: "Precision Standard",
    highlight: false,
    features: [
      "38\" × 68\" cutting area",
      "Single tool head",
      "AI contour extraction",
      "Vacuum suction table",
      "USB & LAN connectivity",
    ],
  },
  {
    name: "Pro-Series",
    tagline: "Performance Leader",
    highlight: true,
    features: [
      "38\" × 68\" cutting area",
      "Dual tool heads",
      "AI contour extraction",
      "Vacuum suction table",
      "Auto-feed conveyor",
      "Priority support",
    ],
  },
  {
    name: "Ultra-Series",
    tagline: "Heavy Production",
    highlight: false,
    features: [
      "Custom cutting area",
      "Dual tool heads",
      "AI contour extraction",
      "Industrial vacuum system",
      "Full auto-feed conveyor",
      "Dedicated account rep",
    ],
  },
];

export default function Series() {
  return (
    <section className="bg-inverse-surface py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <div className="font-label text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Product Line
          </div>
          <h2 className="font-headline font-bold text-4xl text-white tracking-tight">
            Choose Your Configuration
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-0">
          {series.map((s, i) => (
            <div
              key={i}
              className={`p-10 border transition-colors ${
                s.highlight
                  ? "border-primary border-2 bg-white/5"
                  : "border-white/10"
              }`}
            >
              {s.highlight && (
                <div className="font-label text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                  Most Popular
                </div>
              )}
              <div className="font-headline font-bold text-2xl text-white mb-1">
                {s.name}
              </div>
              <div className="font-body text-sm text-tertiary-fixed-dim mb-8">
                {s.tagline}
              </div>
              <ul className="space-y-3 mb-10">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body text-sm text-tertiary-fixed-dim">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className={`block text-center font-label font-semibold text-sm px-6 py-3 uppercase tracking-widest transition-colors ${
                  s.highlight
                    ? "bg-primary text-on-primary hover:bg-primary-container"
                    : "border border-white/30 text-white hover:border-white"
                }`}
              >
                Configure
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
