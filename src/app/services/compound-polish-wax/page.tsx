import Navbar from "@/components/Navbar";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compound, Polish & Wax | Hull Pro Marine Care",
  description: "Professional three-step compound, polish and wax service in Antigua. Restore your vessel's finish and protect against harsh marine elements.",
};

export default function CompoundPolishWax() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: "104px" }}>
        <section style={{ backgroundColor: "#2d4a7a", padding: "80px 60px" }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}>

            {/* Left — Photo */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "4px", overflow: "hidden" }}>
              <Image
                src="/images/services/polish-wax.jpeg"
                alt="Compound, Polish and Wax — Hull Pro Marine Care"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* Right — Content */}
            <div style={{ textAlign: "center" }}>
              <h1 style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "white",
                marginBottom: "28px",
                lineHeight: 1.3,
              }}>
                Compound, Polish &amp; Wax
              </h1>

              <p style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}>
                Protect your investment with our meticulous three-step restoration process. Our skilled
                technicians use marine-grade compounds to remove oxidation and imperfections, professional
                polishing to enhance depth and clarity, and premium wax application to seal and protect
                against harsh marine elements.
              </p>

              <p style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.8,
                marginBottom: "40px",
              }}>
                Experience the difference proper maintenance makes—from extended gelcoat life to improved
                fuel efficiency and enhanced resale value. Don&apos;t settle for anything less than excellence
                for your vessel.
              </p>

              <Link href="/contact" style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid white",
                padding: "14px 40px",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}>
                Get Estimate
              </Link>
            </div>

          </div>
        </section>

        <Reviews />
      </main>
      <Footer />
    </>
  );
}
