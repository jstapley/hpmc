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
    <section id="work" style={{ padding: "80px 40px", backgroundColor: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          textAlign: "center",
          marginBottom: "40px",
          color: "#1a1a1a",
        }}>
          Our Work
        </h2>

        {/* Carousel */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", backgroundColor: "#f0f0f0" }}>
          <Image
            src={workImages[current].src}
            alt={workImages[current].alt}
            fill
            style={{ objectFit: "cover" }}
          />

          {/* Prev */}
          <button onClick={prev} style={{
            position: "absolute", left: 0, top: 0, height: "100%", width: "50px",
            backgroundColor: "rgba(0,0,0,0.25)", color: "white", border: "none",
            fontSize: "2rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}>‹</button>

          {/* Next */}
          <button onClick={next} style={{
            position: "absolute", right: 0, top: 0, height: "100%", width: "50px",
            backgroundColor: "rgba(0,0,0,0.25)", color: "white", border: "none",
            fontSize: "2rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}>›</button>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "16px" }}>
          {workImages.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: "10px", height: "10px", borderRadius: "50%", border: "none", cursor: "pointer",
              backgroundColor: i === current ? "#2d4a7a" : "#ccc",
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
