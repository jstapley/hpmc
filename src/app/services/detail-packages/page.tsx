import Navbar from "@/components/Navbar";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marine Detail Packages | Hull Pro Marine Care",
  description: "Comprehensive marine detail packages in Antigua designed to match your specific needs and vessel requirements.",
};

export default function DetailPackages() {
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
              <Image src="/images/services/detail-package.jpeg" alt="Marine Detail Packages" fill priority style={{ objectFit: "cover" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "white", marginBottom: "28px", lineHeight: 1.3 }}>
                Marine Detail Packages
              </h1>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "20px" }}>
                Elevate your yachting experience with our comprehensive Detail Packages, designed to match your specific needs and vessel requirements. From essential maintenance to complete transformations, each package delivers meticulous attention to every surface—from gleaming hulls to pristine interiors.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "40px" }}>
                Our certified technicians use premium marine-specific products and techniques to restore, protect, and enhance your yacht&apos;s beauty and value. Choose the level of care your investment deserves and enjoy more time on the water with confidence in your vessel&apos;s impeccable condition.
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
