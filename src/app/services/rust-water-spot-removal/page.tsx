import Navbar from "@/components/Navbar";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rust & Water Spot Removal | Hull Pro Marine Care",
  description: "Professional rust and water spot removal service in Antigua. We restore your vessel's pristine appearance using proven methods.",
};

export default function RustWaterSpotRemoval() {
  return (
    <>
      <Navbar />

      {/* Hero / Service Section */}
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
                src="/images/services/hpmc-daniel.jpeg"
                alt="Daniel Athill — Hull Pro Marine Care"
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
                Rust &amp; Water Spot Removal
              </h1>

              <p style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.8,
                marginBottom: "40px",
              }}>
                Restore your vessel&apos;s pristine appearance with our professional rust and water
                spot removal service. Using{" "}
                <a
                  href="https://www.antiguamarinesolutions.com/shop/starke-venom-rust-stain-remover"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "underline", fontWeight: 600 }}
                >
                  Starke Venom Rust &amp; Water Spot Removal
                </a>
                , we safely eliminate stubborn stains, mineral deposits, and surface rust that dulls
                your boat&apos;s finish. Our expert technicians restore gel coat and metal surfaces to their
                original luster, protecting your investment and maintaining your vessel&apos;s value.
                Trust our proven methods to bring back that showroom shine.
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
