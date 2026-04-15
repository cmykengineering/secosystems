"use client";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeKWt-ZPy96HN37vjYchxolOyL85iaRKA-geAc2oig-8YEtOA/viewform?embedded=true";

const promises = [
  "Full technical spec sheet for your configuration",
  "Pricing and available lead times",
  "One business day response from our engineering team",
];

export default function QuoteForm() {
  return (
    <section id="quote" className="bg-surface-container-low py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left: context */}
        <div className="md:sticky md:top-24">
          <div className="font-label text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Get Started
          </div>
          <h2 className="font-headline font-bold text-4xl text-on-surface tracking-tight mb-6">
            Request Technical
            <br />
            Specification
          </h2>
          <p className="font-body text-sm text-secondary leading-relaxed mb-8">
            Tell us about your shop and production volume. We&apos;ll match you
            to the right configuration and send everything you need to make a
            decision.
          </p>
          <ul className="space-y-4 mb-10">
            {promises.map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">
                  check_circle
                </span>
                <span className="font-body text-sm text-secondary leading-relaxed">
                  {pt}
                </span>
              </li>
            ))}
          </ul>
          <div className="border-t border-surface-container-high pt-8">
            <div className="font-label text-xs uppercase tracking-widest text-secondary mb-1">
              Manufacturer
            </div>
            <div className="font-headline font-semibold text-sm text-on-surface">
              CMYK Engineering
            </div>
          </div>
        </div>

        {/* Right: Google Form embed */}
        <div className="border border-surface-container-high bg-white overflow-hidden">
          <iframe
            src={GOOGLE_FORM_URL}
            width="100%"
            height="820"
            frameBorder="0"
            title="SECO Systems Quote Request"
            className="block"
          >
            Loading form…
          </iframe>
        </div>
      </div>
    </section>
  );
}
