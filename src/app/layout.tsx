import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hull Pro Marine Care | Yacht Detailing Services in Antigua",
  description:
    "Professional yacht detailing services in Antigua. We treat your boat like our own — from hull cleaning to full interior and exterior detailing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="OUO3bddH5wGcyKfOeF6ilw"
          async
        />
      </head>
      <body>{children}</body>
    </html>
  );
}