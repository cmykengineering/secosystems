const pillars = [
  {
    title: "Production throughput",
    subtitle: "Designed for daily shop output",
    description:
      "Auto-feed workflow, stable material handling, and a large working area let your team run more jobs without bottlenecks.",
  },
  {
    title: "Cut accuracy",
    subtitle: "Cleaner finishing on every run",
    description:
      "Dual tool heads and AI-assisted contour extraction help reduce manual trimming and improve repeatability across batches.",
  },
  {
    title: "Operational confidence",
    subtitle: "Built for the US market",
    description:
      "English documentation, onboarding support, and service-minded implementation make the system easier to adopt and scale.",
  },
];

export default function Pillars() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1693ff]">
            Why it sells
          </div>
          <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            A machine built around throughput, precision, and serviceability.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            The value proposition is simple: reduce manual finishing, keep cutting accuracy consistent, and give your shop a system that can actually support production growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1693ff]">
                {pillar.subtitle}
              </div>
              <h3 className="mt-4 font-headline text-2xl font-bold tracking-tight text-slate-950">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
