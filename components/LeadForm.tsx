export default function LeadForm() {
  const embedUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeKWt-ZPy96HN37vjYchxolOyL85iaRKA-geAc2oig-8YEtOA/viewform?embedded=true";

  return (
    <section id="quote" className="py-20 px-6 bg-blue-600">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Automate Your DTF Cutting?
        </h2>
        <p className="text-blue-100 mb-10">
          Request a quote and our team will get back to you within 1 business day.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src={embedUrl}
            width="100%"
            height="820"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="SECO Systems Quote Request"
            style={{ background: "#fff" }}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}
