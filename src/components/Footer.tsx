import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--navy-dark)] py-6 border-t border-white/10 text-center text-white/30 text-xs">
      <p>&copy; {year} Hull Pro Marine Care — Daniel Athill. All rights reserved.</p>
    </footer>
  );
}
