import Image from "next/image";

const points = [
  "US-based onboarding and operator guidance during launch",
  "Help with configuration, setup, and implementation questions",
  "Ongoing support model designed for production environments",
];

export default function Support() {
  return (
    <section id="support" className="bg-slate-100 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="relative aspect-[4/4.3] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/seco-flatbed-dtf-cutter-overview-rear.jpg"
              alt="SECO flatbed DTF cutter rear overview"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1693ff]">
              Support model
            </div>
            <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              The machine matters. Support matters just as much.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Industrial equipment decisions are rarely only about specs. Buyers also want confidence that implementation will be clear, communication will be direct, and support won&apos;t disappear after installation.
            </p>

            <div className="mt-8 space-y-4">
              {points.map((pt) => (
                <div key={pt} className="flex gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#1693ff]" />
                  <p className="text-sm leading-7 text-slate-700">{pt}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-md bg-slate-950 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-slate-800"
              >
                Talk to engineering
              </a>
              <a
                href="#series"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition hover:border-slate-950 hover:bg-white"
              >
                Review configurations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
