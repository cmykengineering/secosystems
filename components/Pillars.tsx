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
    <section className="bg-surface-container-low py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-0">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="border border-outline-variant p-10 hover:border-primary transition-colors group cursor-default"
            >
              <span className="material-symbols-outlined text-primary text-5xl block mb-6">
                {p.icon}
              </span>
              <div className="font-headline font-bold text-2xl text-on-surface mb-1">
                {p.title}
              </div>
              <div className="font-label text-xs font-semibold uppercase tracking-widest text-primary mb-4">
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
