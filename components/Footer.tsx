export default function Footer() {
  return (
    <footer className="bg-inverse-surface py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <div className="font-headline font-bold text-lg tracking-widest text-white uppercase mb-2">
            SECO Precision
          </div>
          <div className="font-body text-sm text-tertiary-fixed-dim">
            Industrial DTF Flatbed Cutting Systems
          </div>
          <div className="font-body text-xs text-tertiary-fixed-dim mt-1">
            A CMYK Engineering product
          </div>
        </div>
        <div className="flex gap-12">
          <div>
            <div className="font-label text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Products
            </div>
            <ul className="space-y-2">
              {["S-Series", "Pro-Series", "Ultra-Series", "Accessories"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-sm text-tertiary-fixed-dim hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-label text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Company
            </div>
            <ul className="space-y-2">
              {["About", "Support", "Parts", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-sm text-tertiary-fixed-dim hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8">
        <p className="font-body text-xs text-tertiary-fixed-dim">
          © {new Date().getFullYear()} SECO Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
