import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jantaro | Prozessautomatisierung für Unternehmen",
  description:
    "Jantaro automatisiert wiederkehrende Büro- und Geschäftsprozesse und verbindet bestehende Systeme, damit manuelle Arbeit automatisch erledigt wird.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
