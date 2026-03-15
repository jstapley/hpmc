import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-[var(--navy)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Yacht being detailed in Antigua"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)]/90 via-[var(--navy)]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-xl">
          Best Yacht Detailing Services in Antigua
        </h1>

        <p className="text-white/80 text-base md:text-lg max-w-md mb-8 leading-relaxed">
          Allow our team of experts to attend to your yacht — right down to
          the smallest of details.
        </p>

        <Link href="#contact" className="btn-primary">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
