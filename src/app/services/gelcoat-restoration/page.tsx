import Navbar from "@/components/Navbar";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gelcoat Restoration | Hull Pro Marine Care",
  description: "Professional gelcoat restoration service in Antigua. Transform chalky, oxidized surfaces back to their original luster with our multi-stage correction process.",
};

export default function GelcoatRestoration() {
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
              <Image src="/images/services/work-4.jpg" alt="Gelcoat Restoration" fill priority style={{ objectFit: "cover" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "white", marginBottom: "28px", lineHeight: 1.3 }}>
                Gelcoat Restoration
              </h1>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "20px" }}>
                Breathe new life into your vessel with our professional Gelcoat Restoration service. Years of sun exposure, salt water, and weather damage don&apos;t have to be permanent—our skilled technicians utilize a multi-stage correction process to transform chalky, oxidized surfaces back to their original luster. Using marine-specific compounds and techniques, we carefully remove damaged layers, repair imperfections, and restore depth and color clarity that ordinary detailing cannot achieve.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "40px" }}>
                Beyond the dramatic aesthetic improvement, our restoration process strengthens your hull&apos;s protective barrier, preventing moisture intrusion and structural deterioration. Invest in professional gelcoat restoration now to extend your yacht&apos;s lifespan, enhance its value, and rediscover the pride of ownership that comes with a beautifully restored vessel.
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
