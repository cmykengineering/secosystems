const company = [
  { label: "Architecture", href: "#specs" },
  { label: "Configurations", href: "#series" },
  { label: "Support", href: "#support" },
  { label: "Request Quote", href: "#quote" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050b12] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="font-headline text-lg font-bold uppercase tracking-[0.28em] text-white">
              SECO Systems
            </div>
            <p className="mt-4 text-sm leading-7 text-white/58">
              Industrial DTF flatbed cutting systems for US print shops, apparel decorators, and production teams that need scalable finishing capacity.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/62">
            {company.map(({ label, href }) => (
              <a key={label} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-xs text-white/42 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SECO Systems. All rights reserved.</p>
          <p>A CMYK Engineering product.</p>
        </div>
      </div>
    </footer>
  );
}
