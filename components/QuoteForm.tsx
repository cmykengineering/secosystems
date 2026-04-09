"use client";

export default function QuoteForm() {
  return (
    <section id="quote" className="bg-surface-container-lowest py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="font-label text-xs font-semibold uppercase tracking-widest text-primary mb-3">
          Get Started
        </div>
        <h2 className="font-headline font-bold text-4xl text-on-surface tracking-tight mb-4">
          Request Technical Specification
        </h2>
        <p className="font-body text-sm text-secondary mb-12">
          Our engineering team will send you full specs, pricing, and lead times
          within one business day.
        </p>
        <form
          action="https://formspree.io/f/REPLACE_WITH_ID"
          method="POST"
          className="grid md:grid-cols-3 gap-0"
        >
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            required
            className="border border-outline-variant px-5 py-4 font-body text-sm text-on-surface placeholder-secondary focus:outline-none focus:border-primary bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="border border-outline-variant border-l-0 px-5 py-4 font-body text-sm text-on-surface placeholder-secondary focus:outline-none focus:border-primary bg-white"
          />
          <button
            type="submit"
            className="bg-primary text-on-primary font-label font-semibold text-sm px-6 py-4 uppercase tracking-widest hover:bg-primary-container transition-colors"
          >
            Get Quote
          </button>
        </form>
      </div>
    </section>
  );
}
