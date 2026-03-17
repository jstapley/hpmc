"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    fontSize: "14px",
    border: "1px solid rgba(255,255,255,0.2)",
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "white",
    outline: "none",
    fontFamily: "Open Sans, sans-serif",
  };

  return (
    <section id="contact" style={{ padding: "80px 40px", backgroundColor: "#1a2a4a" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          textAlign: "center",
          marginBottom: "40px",
          color: "white",
        }}>
          Contact Us
        </h2>

        {/* Contact info */}
        <div style={{ textAlign: "center", marginBottom: "40px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <a href="mailto:danieldetails2019@gmail.com" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
            ✉ danieldetails2019@gmail.com
          </a>
          <a href="tel:+13687764829" style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
            ✆ +1 (368) 776-4829
          </a>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
            ⚲ Winthorpes Bay, Burma Road, Antigua
          </span>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "8px" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>Instagram</a>
          </div>
        </div>

        {/* Form */}
        {submitted ? (
          <div style={{ textAlign: "center", color: "white", padding: "40px" }}>
            <p style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "8px" }}>Thank you!</p>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>We&apos;ll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Full Name" style={inputStyle} />
            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="Email Address" style={inputStyle} />
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" style={inputStyle} />
            <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Message" style={{ ...inputStyle, resize: "none" }} />
            <button type="submit" style={{
              width: "100%",
              padding: "16px",
              backgroundColor: "#2d4a7a",
              color: "white",
              border: "none",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "Open Sans, sans-serif",
            }}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
