export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-surface-container-high">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="font-headline font-bold text-lg tracking-widest text-on-surface uppercase">
          SECO PRECISION
        </span>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Systems", href: "#specs" },
            { label: "Series", href: "#series" },
            { label: "Support", href: "#support" },
            { label: "Contact", href: "#quote" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-label text-sm font-medium text-secondary hover:text-primary uppercase tracking-wide transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#quote"
          className="bg-primary text-on-primary font-label font-semibold text-sm px-5 py-2.5 uppercase tracking-widest hover:bg-primary-container transition-colors"
        >
          Request Quote
        </a>
      </div>
    </nav>
  );
}
