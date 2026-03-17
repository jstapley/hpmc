import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: "#2d4a7a" }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "50px 60px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
        gap: "40px",
      }}>

        {/* Left — Logo */}
        <div>
          <Image
            src="/images/logo.png"
            alt="Hull Pro Marine Care"
            width={160}
            height={160}
            style={{ objectFit: "contain", display: "block" }}
          />
        </div>

        {/* Center — Contact info */}
        <div style={{ textAlign: "center" }}>
          <p style={{
            color: "white",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}>
            Contact Us
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="mailto:danieldetails2019@gmail.com" style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <span>✉</span> danieldetails2019@gmail.com
            </a>
            <a href="tel:+12687764829" style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <span>📞</span> +1 268-776-4829
            </a>
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <span>📍</span> Winthorpes Bay, Burma Road, Antigua
            </span>
          </div>
        </div>

        {/* Right — Social + directory links */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "20px" }}>
          {/* Social icons */}
          <div style={{ display: "flex", gap: "16px" }}>
            <a
              href="https://www.facebook.com/profile.php?id=100079446567099"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              {/* Facebook icon */}
              <svg width="44" height="44" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/hpmc268/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              {/* Instagram icon */}
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
              </svg>
            </a>
          </div>

          {/* Directory links */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
            <a href="https://antiguasearch.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px" }}>
              Antigua Search
            </a>
            <a href="https://antiguamarinesolutions.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px" }}>
              Antigua Marine Solutions
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.15)",
        padding: "16px 60px",
        textAlign: "center",
        color: "rgba(255,255,255,0.4)",
        fontSize: "12px",
      }}>
        &copy; {year} Hull Pro Marine Care — Daniel Athill. All rights reserved.
      </div>
    </footer>
  );
}