import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hull Pro Marine Care | Yacht Detailing Services in Antigua",
  description:
    "Professional yacht detailing services in Antigua. We treat your boat like our own — from hull cleaning to full interior and exterior detailing.",
  keywords: "yacht detailing, boat cleaning, hull cleaning, Antigua, marine care",
  openGraph: {
    title: "Hull Pro Marine Care",
    description: "Professional yacht detailing services in Antigua.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
