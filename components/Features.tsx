const features = [
  {
    icon: "🎯",
    title: "AI Contour Extraction",
    desc: "Automatically cuts to the shape of any design — no manual tracing required.",
  },
  {
    icon: "⚡",
    title: "Auto Feeding",
    desc: "Automate material loading for seamless, continuous high-volume operation.",
  },
  {
    icon: "📷",
    title: "Camera Position Tracking",
    desc: "Real-time alignment adjustments ensure every cut is precisely positioned.",
  },
  {
    icon: "🌀",
    title: "Vacuum Suction",
    desc: "Holds media securely for accurate cuts — no slipping, no waste.",
  },
  {
    icon: "🗑️",
    title: "Auto Waste Collection",
    desc: "Catch basket stores waste material after cutting for easy disposal.",
  },
  {
    icon: "🇺🇸",
    title: "US-Adapted",
    desc: "120V/220V compatible, English docs, US-based support and warranty.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Built for Production. Designed for Precision.
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Every feature engineered to speed up your DTF post-print workflow and reduce wasted material.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
