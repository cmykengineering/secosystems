"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/seco-digital-cutting-systems-dtf-flatbed-cutter-hero.jpg",
    alt: "SECO Digital Cutting Systems - professional DTF flatbed cutter",
  },
  {
    src: "/images/seco-flatbed-dtf-cutter-overview-rear.jpg",
    alt: "SECO flatbed DTF cutter - full machine overview rear",
  },
  {
    src: "/images/seco-flatbed-dtf-cutter-overview-front.jpg",
    alt: "SECO DTF cutter - front view with conveyor belt",
  },
  {
    src: "/images/seco-dtf-cutter-auto-feed-waste-collection.jpg",
    alt: "SECO DTF cutter - auto feed and waste collection system",
  },
  {
    src: "/images/seco-dtf-cutting-table-conveyor-belt.jpg",
    alt: "SECO DTF cutting table with vacuum suction and conveyor belt",
  },
  {
    src: "/images/seco-dual-tool-head-precision-cutting.jpg",
    alt: "SECO dual tool head T1 T2 for precision DTF cutting",
  },
  {
    src: "/images/seco-cutting-tool-closeup-t1-t2-heads.jpg",
    alt: "SECO cutting tool closeup - precision cutting heads",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800" style={{ aspectRatio: "16/10" }}>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Dark background so any white-bg photos look clean */}
          <div className="absolute inset-0 bg-gray-800" />
          {/* Padding wrapper — keep padding OFF the fill image to avoid clipping */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority={i === 0}
              />
            </div>
          </div>
        </div>
      ))}

      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900/60 to-transparent" />

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl transition z-10"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl transition z-10"
      >
        ›
      </button>

      {/* Counter */}
      <div className="absolute top-3 right-3 bg-black/40 text-white text-xs px-2 py-1 rounded-full z-10">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
}
