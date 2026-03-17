"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Rust & Water Spot Removal",   href: "/services/rust-water-spot-removal" },
  { label: "Compound, Polish, & Wax",     href: "/services/compound-polish-wax" },
  { label: "Detail Packages",             href: "/services/detail-packages" },
  { label: "Mold Removal & Prevention",   href: "/services/mold-removal-prevention" },
  { label: "Ceramic Coatings",            href: "/services/ceramic-coatings" },
  { label: "Boat Wash",                   href: "/services/boat-wash" },
  { label: "Antifouling Application",     href: "/services/antifouling-application" },
  { label: "Interior Deep Cleaning",      href: "/services/interior-deep-cleaning" },
  { label: "Gelcoat Restoration",         href: "/services/gelcoat-restoration" },
  { label: "Quarterly & Monthly Plans",   href: "/services/quarterly-monthly-plans" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      backgroundColor: "white",
      boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "12px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Hull Pro Marine Care"
            width={80}
            height={80}
            style={{ objectFit: "contain", display: "block", border: "none" }}
          />
        </Link>

        {/* Desktop links */}
        <ul style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          listStyle: "none",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#1a2a4a",
        }}>
          <li><Link href="/" style={{ color: "#1a2a4a", textDecoration: "none" }}>Home</Link></li>

          {/* Services dropdown */}
          <li style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#1a2a4a",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: 0,
              fontFamily: "Open Sans, sans-serif",
            }}>
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1a2a4a" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown */}
            {servicesOpen && (
              <div style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "white",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                borderTop: "3px solid #2d4a7a",
                minWidth: "280px",
                zIndex: 100,
                marginTop: "0px",
              }}>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    style={{
                      display: "block",
                      padding: "12px 20px",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#1a2a4a",
                      textDecoration: "none",
                      borderBottom: "1px solid #f0f0f0",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f7f8fa")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li><Link href="/contact" style={{ color: "#1a2a4a", textDecoration: "none" }}>Contact Us</Link></li>
          <li>
            <Link href="tel:+12687764829" style={{
              backgroundColor: "#2d4a7a",
              color: "white",
              padding: "12px 24px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}>
              Call Us
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#1a2a4a" }} />
          <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#1a2a4a" }} />
          <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#1a2a4a" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: "white",
          borderTop: "1px solid #eee",
          padding: "20px 40px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          fontSize: "13px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#1a2a4a",
        }}>
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ color: "#1a2a4a", textDecoration: "none" }}>Home</Link>
          {services.map((service) => (
            <Link key={service.href} href={service.href} onClick={() => setMenuOpen(false)}
              style={{ color: "#1a2a4a", textDecoration: "none", fontSize: "12px" }}>
              — {service.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ color: "#1a2a4a", textDecoration: "none" }}>Contact Us</Link>
          <Link href="tel:+12687764829" style={{
            backgroundColor: "#2d4a7a", color: "white",
            padding: "10px 16px", textAlign: "center", textDecoration: "none",
          }}>Call Us</Link>
        </div>
      )}
    </nav>
  );
}