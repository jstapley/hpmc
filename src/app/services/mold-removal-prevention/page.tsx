"use client";

import Navbar from "@/components/Navbar";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const carouselImages = [
  { src: "/images/services/mildew-clean-before.jpg", label: "Before" },
  { src: "/images/services/mildew-clean-after.jpg",  label: "After" },
];

export default function MoldRemovalPrevention() {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <Navbar />
      <main style={{ marginTop: "104px" }}>
        <section style={{ backgroundColor: "#2d4a7a", padding: "80px 60px" }}>
          <div style={{
            maxWidth: "1200px", margin: "0 auto",
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "60px", alignItems: "center",
          }}>
            {/* Carousel */}
            <div>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "4px", overflow: "hidden" }}>
                <Image
                  src={carouselImages[current].src}
                  alt={`Mold removal ${carouselImages[current].label}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
                {/* Label */}
                <div style={{
                  position: "absolute", bottom: "12px", left: "12px",
                  backgroundColor: "rgba(0,0,0,0.55)", color: "white",
                  padding: "4px 12px", fontSize: "12px", fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "2px",
                }}>
                  {carouselImages[current].label}
                </div>
              </div>
              {/* Dots */}
              <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "12px" }}>
                {carouselImages.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} style={{
                    width: "10px", height: "10px", borderRadius: "50%", border: "none",
                    cursor: "pointer", backgroundColor: i === current ? "white" : "rgba(255,255,255,0.35)",
                  }} />
                ))}
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "white", marginBottom: "28px", lineHeight: 1.3 }}>
                Mold Removal &amp; Prevention
              </h1>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "20px" }}>
                <a
                  href="https://www.antiguamarinesolutions.com/shop/starke-mildew-clean-16oz"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "underline", fontWeight: 600 }}
                >
                  Eliminate harmful mold and prevent future growth with our specialized marine treatment system.
                </a>{" "}
                Our technicians target even the most hidden mold colonies using professional-grade, marine-safe solutions that destroy spores at their source while protecting your yacht&apos;s surfaces and materials.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "40px" }}>
                Beyond removal, we apply industry-leading preventative treatments and provide personalized ventilation strategies to keep your vessel healthy and pristine. Safeguard your investment, protect passengers from respiratory irritants, and preserve your yacht&apos;s beauty and value with our comprehensive mold management approach.
              </p>
              <Link href="/contact" style={{
                display: "inline-block", backgroundColor: "transparent", color: "white",
                border: "2px solid white", padding: "14px 40px", fontSize: "13px",
                fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none",
              }}>Get Estimate</Link>
            </div>
          </div>
        </section>
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
