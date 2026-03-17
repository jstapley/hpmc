import Navbar from "@/components/Navbar";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Deep Cleaning | Hull Pro Marine Care",
  description: "Comprehensive interior deep cleaning service for yachts in Antigua. Rejuvenate every surface with yacht-specific techniques and premium non-toxic agents.",
};

export default function InteriorDeepCleaning() {
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
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/images/services/starke detailing 02a.jpg" alt="Interior Deep Cleaning" fill priority style={{ objectFit: "cover" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "white", marginBottom: "28px", lineHeight: 1.3 }}>
                Interior Deep Cleaning
              </h1>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "20px" }}>
                Transform your vessel&apos;s cabin and living quarters with our comprehensive Interior Deep Cleaning service. Our specialized marine technicians meticulously rejuvenate every surface using yacht-specific techniques and premium, non-toxic cleaning agents. We expertly address the unique challenges of marine environments—eliminating salt residue, humidity damage, and hidden contaminants from upholstery, teak surfaces, carpeting, and cabinetry.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "40px" }}>
                Beyond aesthetics, our process removes allergens, prevents mold development, and protects your investment from premature aging. Experience the satisfaction of stepping aboard a yacht that not only looks immaculate but provides a healthy, fresh environment for you and your guests to enjoy.
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
