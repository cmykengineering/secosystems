const specs = [
  ["Max Media Width", "38\""],
  ["Working Area", "38\" × 68\" (965 × 1730 mm)"],
  ["Max Cutting Speed", "800 mm/s"],
  ["Cutting Precision", "0.05 mm"],
  ["Cutting Thickness", "0.5–3 mm"],
  ["Interface", "USB, WiFi, Network"],
  ["Display", "4.3\" touchscreen + PC software"],
  ["Power", "220V / 2800W"],
  ["Operating Temp", "32–95°F (0–35°C)"],
];

const materials = [
  "DTF transfers",
  "UV DTF transfers",
  "TPU / PET / PVC film",
  "Textile / fabric",
  "Cardboard",
  "Magnetic & car stickers",
  "Photo paper",
  "Reflective film",
  "PP backing",
];

export default function Specs() {
  return (
    <section id="specs" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Technical Specifications
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Machine Specs</h3>
            <div className="divide-y divide-gray-200">
              {specs.map(([label, value]) => (
                <div key={label} className="flex justify-between py-3">
                  <span className="text-gray-500">{label}</span>
                  <span className="font-medium text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Compatible Materials</h3>
            <ul className="space-y-3">
              {materials.map((m) => (
                <li key={m} className="flex items-center gap-3 text-gray-700">
                  <span className="text-blue-500 font-bold">✓</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
