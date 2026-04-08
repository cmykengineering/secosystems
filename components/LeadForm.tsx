"use client";
import { useState } from "react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Formspree or similar — endpoint to be configured
    await fetch("https://formspree.io/f/REPLACE_WITH_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSubmitted(true);
  }

  return (
    <section id="quote" className="py-20 px-6 bg-blue-600">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Automate Your DTF Cutting?
        </h2>
        <p className="text-blue-100 mb-10">
          Request a quote and our team will get back to you within 1 business day.
        </p>
        {submitted ? (
          <div className="bg-white text-blue-700 font-semibold px-6 py-4 rounded-xl">
            ✅ Thank you! We&apos;ll be in touch within 1 business day.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
            </div>
            <input
              name="company"
              placeholder="Company / Shop Name"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <input
              name="phone"
              placeholder="Phone (optional)"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us about your current setup or questions..."
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <p className="text-blue-200 text-sm">
              By submitting, you agree that SECO Systems will contact you about your inquiry.
            </p>
            <button
              type="submit"
              className="w-full bg-white text-blue-600 font-bold py-4 rounded-lg hover:bg-blue-50 transition"
            >
              Request a Quote →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
