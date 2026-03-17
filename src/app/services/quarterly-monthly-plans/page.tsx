import Navbar from "@/components/Navbar";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quarterly & Monthly Plans | Hull Pro Marine Care",
  description: "Structured quarterly and monthly yacht care plans in Antigua. Premium maintenance on a consistent schedule to keep your vessel in peak condition year-round.",
};

export default function QuarterlyMonthlyPlans() {
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
              <Image src="/images/services/hpmc-daniel.jpeg" alt="Quarterly & Monthly Plans" fill priority style={{ objectFit: "cover" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "white", marginBottom: "28px", lineHeight: 1.3 }}>
                Quarterly &amp; Monthly Plans
              </h1>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "20px" }}>
                Our carefully structured Quarterly and Monthly Plans deliver premium care on a consistent schedule, preventing costly deterioration while maintaining your yacht in peak condition year-round.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "20px" }}>
                Each visit includes comprehensive services tailored to your vessel&apos;s specific needs and usage patterns—from detailed exterior cleaning to critical preventative maintenance.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "40px" }}>
                Beyond the superior care, enjoy the convenience of priority scheduling, exclusive pricing, and the peace of mind that comes with professional oversight of your maritime investment. Stop worrying about maintenance schedules and start enjoying more carefree time on the water with a customized care plan from the region&apos;s most trusted yacht detailing specialists.
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
