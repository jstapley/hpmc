"use client";

import { useState } from "react";
import Image from "next/image";

const workImages = [
  { src: "/images/work/work-1.jpg", alt: "Hull cleaning and polishing" },
  { src: "/images/work/work-2.jpg", alt: "Interior detailing" },
  { src: "/images/work/work-3.jpg", alt: "Deck restoration" },
  { src: "/images/work/work-4.jpg", alt: "Teak cleaning" },
  { src: "/images/work/work-5.jpg", alt: "Full exterior detail" },
  { src: "/images/work/work-6.jpg", alt: "Bottom paint preparation" },
];

export default function OurWork() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? workImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === workImages.length - 1 ? 0 : c + 1));

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-heading">Our Work</h2>

        {/* Carousel — matches the bordered box in the screenshot */}
        <div className="relative border border-gray-200 rounded-sm overflow-hidden bg-gray-50" style={{ aspectRatio: "4/3" }}>
          <Image
            src={workImages[current].src}
            alt={workImages[current].alt}
            fill
            className="object-cover"
          />

          {/* Prev arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-full bg-white/60 hover:bg-white/80 flex items-center justify-center text-2xl text-[var(--navy)] transition-colors"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-full bg-white/60 hover:bg-white/80 flex items-center justify-center text-2xl text-[var(--navy)] transition-colors"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {workImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Image ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-[var(--blue-accent)]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
