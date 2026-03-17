import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#1a2a4a",
      marginTop: "104px",
    }}>
      {/* Background Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/hero-bg.jpeg"
          alt="Yacht being detailed in Antigua"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(26, 42, 74, 0.55)",
        }} />
      </div>

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        padding: "80px 80px 80px 120px",
      }}>
        <h1 style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 700,
          color: "white",
          lineHeight: 1.15,
          marginBottom: "24px",
          maxWidth: "700px",
        }}>
          Best Yacht Detailing Services in Antigua
        </h1>
        <p style={{
          color: "rgba(255,255,255,0.9)",
          fontSize: "1.1rem",
          maxWidth: "500px",
          marginBottom: "40px",
          lineHeight: 1.7,
        }}>
          Allow our team of specialists to revitalize your yacht down to the smallest of details.
        </p>
        <Link href="#contact" style={{
          display: "inline-block",
          backgroundColor: "#2d4a7a",
          color: "white",
          padding: "16px 32px",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}>
          Contact Us
        </Link>
      </div>
    </section>
  );
}