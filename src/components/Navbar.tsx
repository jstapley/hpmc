"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--navy)] shadow-lg" : "bg-[var(--navy)]/80"}`}>
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* Replace with: <Image src="/images/logo.png" alt="Hull Pro Marine Care" width={48} height={48} /> */}
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <span className="text-[var(--navy)] font-bold text-xs text-center leading-tight">HPMC</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-white text-xs font-semibold tracking-wider uppercase">
          <li><Link href="#customers" className="hover:text-white/70 transition-colors">Clients</Link></li>
          <li><Link href="#purpose" className="hover:text-white/70 transition-colors">About</Link></li>
          <li><Link href="#work" className="hover:text-white/70 transition-colors">Our Work</Link></li>
          <li><Link href="#reviews" className="hover:text-white/70 transition-colors">Reviews</Link></li>
          <li><Link href="#contact" className="btn-primary text-xs py-2 px-4">Contact Us</Link></li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--navy)] px-6 pb-5 flex flex-col gap-4 text-white text-sm font-semibold uppercase tracking-wider">
          <Link href="#customers" onClick={() => setMenuOpen(false)}>Clients</Link>
          <Link href="#purpose" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#work" onClick={() => setMenuOpen(false)}>Our Work</Link>
          <Link href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</Link>
          <Link href="#contact" className="btn-primary text-center" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
