export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#081018]/82 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-headline text-lg font-bold uppercase tracking-[0.28em] text-white">
          SECO SYSTEMS
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {[
            { label: "Architecture", href: "#specs" },
            { label: "Configurations", href: "#series" },
            { label: "Support", href: "#support" },
            { label: "Quote", href: "#quote" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium uppercase tracking-[0.14em] text-white/70 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#quote"
          className="inline-flex items-center justify-center rounded-md bg-[#1693ff] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3aa5ff]"
        >
          Request quote
        </a>
      </div>
    </nav>
  );
}
