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

  return (
    <section id="contact" className="py-20 bg-[var(--navy)]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-heading text-white">Contact Us</h2>

        {/* Contact info */}
        <div className="flex flex-col items-center gap-3 mb-10 text-white/70 text-sm text-center">
          <a href="mailto:danieldetails2019@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
            <span>✉</span> danieldetails2019@gmail.com
          </a>
          <a href="tel:+13687764829" className="hover:text-white transition-colors flex items-center gap-2">
            <span>✆</span> +1 (368) 776-4829
          </a>
          <span className="flex items-center gap-2">
            <span>⚲</span> Winthorpes Bay, Burma Road, Antigua
          </span>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors text-sm"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors text-sm"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="text-center text-white py-8">
            <p className="text-xl font-bold mb-2">Thank you!</p>
            <p className="text-white/60">We&apos;ll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 text-sm"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 text-sm"
              placeholder="Email Address"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 text-sm"
              placeholder="Phone (optional)"
            />
            <textarea
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 text-sm resize-none"
              placeholder="Message"
            />
            <button type="submit" className="btn-primary w-full text-center">
              Send Message
            </button>
          </form>
        )}

        {/* Footer links */}
        <div className="mt-12 text-center text-white/30 text-xs flex flex-col gap-1">
          <span>Antigua Search</span>
          <span>Antigua Marine Solutions</span>
        </div>
      </div>
    </section>
  );
}
