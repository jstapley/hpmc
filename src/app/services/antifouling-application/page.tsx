import Navbar from "@/components/Navbar";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antifouling Application | Hull Pro Marine Care",
  description: "Professional antifouling application service in Antigua. Maximize your vessel's efficiency and longevity with premium-grade coatings.",
};

export default function AntifoulingApplication() {
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
              <Image src="/images/services/antifouling.jpeg" alt="Antifouling Application" fill priority style={{ objectFit: "cover" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "white", marginBottom: "28px", lineHeight: 1.3 }}>
                Antifouling Application
              </h1>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "20px" }}>
                Maximize your vessel&apos;s efficiency and longevity with our professional antifouling application service. Our certified technicians meticulously prepare and apply premium-grade antifouling coatings specifically formulated for your yacht&apos;s hull type and cruising conditions. Unlike DIY approaches, our precise application ensures complete coverage and optimal adhesion, preventing costly growth that increases drag, fuel consumption, and engine strain.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "40px" }}>
                We use environmentally responsible formulations that comply with all regulations while delivering exceptional protection against barnacles, algae, and marine growth. Invest in professional application now to enjoy smoother sailing, reduced maintenance costs, and extended time between haul-outs.
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
