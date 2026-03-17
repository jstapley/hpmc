"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const hours = [
  { day: "Sunday",    time: "Closed" },
  { day: "Monday",    time: "8:00am - 5:00pm" },
  { day: "Tuesday",   time: "8:00am - 5:00pm" },
  { day: "Wednesday", time: "8:00am - 5:00pm" },
  { day: "Thursday",  time: "8:00am - 5:00pm" },
  { day: "Friday",    time: "8:00am - 5:00pm" },
  { day: "Saturday",  time: "8:00am - 5:00pm" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    fontSize: "14px",
    border: "1px solid #d0d0d0",
    borderRadius: "4px",
    outline: "none",
    fontFamily: "Open Sans, sans-serif",
    color: "#333",
    backgroundColor: "white",
  };

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "#1a2a4a",
    marginBottom: "6px",
  };

  return (
    <>
      <Navbar />
      <main style={{ marginTop: "104px" }}>
        <section style={{ backgroundColor: "#2d4a7a", padding: "80px 60px", minHeight: "80vh" }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "60px",
            alignItems: "start",
          }}>

            {/* Left — Contact info, photo, hours */}
            <div>
              <h1 style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "white",
                textAlign: "center",
                marginBottom: "16px",
              }}>
                Contact Daniel Directly
              </h1>

              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <a href="mailto:danieldetails2019@gmail.com" style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", display: "block", marginBottom: "6px" }}>
                  ✉ danieldetails2019@gmail.com
                </a>
                <a href="tel:+12687764829" style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", display: "block", marginBottom: "6px" }}>
                  📞 +1 268-776-4829
                </a>
                <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px" }}>
                  📍 Winthorpes Bay, Burma Road, Antigua
                </span>
              </div>

              {/* Photo */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "4px", overflow: "hidden", marginBottom: "32px" }}>
                <Image
                  src="/images/services/daniel-contact.jpeg"
                  alt="Daniel — Hull Pro Marine Care"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Hours */}
              <h2 style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "white",
                textAlign: "center",
                marginBottom: "16px",
              }}>
                Hours of Service
              </h2>
              <div style={{ textAlign: "center" }}>
                {hours.map(({ day, time }) => (
                  <p key={day} style={{
                    fontSize: "14px",
                    color: time === "Closed" ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.85)",
                    marginBottom: "6px",
                  }}>
                    <strong>{day}:</strong> {time}
                  </p>
                ))}
              </div>
            </div>

            {/* Right — Form card */}
            <div style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "40px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1a2a4a", marginBottom: "12px" }}>
                    Thank you!
                  </p>
                  <p style={{ color: "#555", lineHeight: 1.7 }}>
                    Your message has been sent. Daniel will be in touch shortly.<br />
                    A confirmation email has been sent to <strong>{form.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={labelStyle}>First Name</label>
                      <input type="text" name="firstName" value={form.firstName} onChange={handleChange}
                        placeholder="First Name" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name</label>
                      <input type="text" name="lastName" value={form.lastName} onChange={handleChange}
                        placeholder="Last Name" style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Phone *</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="Phone" style={inputStyle} />
                  </div>

                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="Email" style={inputStyle} />
                  </div>

                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                      placeholder="Send us a message" style={{ ...inputStyle, resize: "vertical" }} />
                  </div>

                  {error && (
                    <p style={{ color: "#dc2626", fontSize: "13px", margin: 0 }}>{error}</p>
                  )}

                  <button type="submit" disabled={loading} style={{
                    width: "100%",
                    padding: "16px",
                    backgroundColor: "#2d4a7a",
                    color: "white",
                    border: "none",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.7 : 1,
                    fontFamily: "Open Sans, sans-serif",
                    borderRadius: "4px",
                  }}>
                    {loading ? "Sending..." : "Submit"}
                  </button>

                  {/* Privacy / Terms */}
                  <p style={{ textAlign: "center", fontSize: "13px", color: "#888", margin: 0 }}>
                    <Link href="/privacy-policy" style={{ color: "#2d4a7a" }}>Privacy Policy</Link>
                    {" | "}
                    <Link href="/terms-of-service" style={{ color: "#2d4a7a" }}>Terms of Service</Link>
                  </p>

                </form>
              )}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}