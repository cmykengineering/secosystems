const pillars = [
  {
    icon: "precision_manufacturing",
    title: "Precision",
    subtitle: "±0.1mm Accuracy",
    description:
      "Servo-driven dual tool heads deliver repeatable contour cuts on every job, every time.",
  },
  {
    icon: "monetization_on",
    title: "Value",
    subtitle: "Industrial ROI",
    description:
      "Enterprise-grade components at a price point built for growing US print shops.",
  },
  {
    icon: "factory",
    title: "Production",
    subtitle: "High-Volume Ready",
    description:
      "Auto-feed conveyor and vacuum hold-down keep your operation running without interruption.",
  },
];

export default function Pillars() {
  return (
    <section className="bg-white py-20 px-6 border-b border-surface-container-high">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-container-high">
          {pillars.map((p, i) => (
            <div key={i} className="px-0 md:px-12 py-10 md:py-0 first:pl-0 last:pr-0">
              <span className="material-symbols-outlined text-primary text-4xl block mb-5">
                {p.icon}
              </span>
              <div className="font-headline font-bold text-xl text-on-surface mb-1">
                {p.title}
              </div>
              <div className="font-label text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                {p.subtitle}
              </div>
              <p className="font-body text-sm text-secondary leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
