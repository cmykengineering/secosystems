"use client";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeKWt-ZPy96HN37vjYchxolOyL85iaRKA-geAc2oig-8YEtOA/viewform?embedded=true";

const promises = [
  "Recommended configuration based on your workflow",
  "Pricing, lead times, and technical details",
  "Reply from our team within one business day",
];

export default function QuoteForm() {
  return (
    <section id="quote" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#71bdff]">
              Request a quote
            </div>
            <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Get specs, pricing, and the right configuration.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/68">
              Tell us what your shop is running today and where you want capacity to go next. We&apos;ll match you to a configuration that fits the workflow.
            </p>

            <div className="mt-8 space-y-4">
              {promises.map((pt) => (
                <div key={pt} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#71bdff]" />
                  <p className="text-sm leading-7 text-white/74">{pt}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">Manufacturer</div>
              <div className="mt-2 font-headline text-lg font-semibold text-white">CMYK Engineering</div>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Industrial DTF finishing systems adapted for the US market with a sales process focused on clarity and fit.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-[0_30px_120px_rgba(0,0,0,.28)]">
            <iframe
              src={GOOGLE_FORM_URL}
              width="100%"
              height="860"
              frameBorder="0"
              title="SECO Systems Quote Request"
              className="block"
            >
              Loading form…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
