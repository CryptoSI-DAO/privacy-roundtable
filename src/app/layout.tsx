import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://privacyroundtable.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Privacy Roundtable — candid talks on privacy tech, crypto & digital freedom",
  description:
    "Live X Spaces conversations with advocates and builders from PIVX, Firo, Zano, Particl, BasicSwap DEX and across the privacy ecosystem. Replays, schedule, and project directory.",
  keywords: [
    "privacy roundtable",
    "privacy coins",
    "X Spaces",
    "PIVX",
    "Firo",
    "Zano",
    "Particl",
    "BasicSwap",
    "Monero",
    "Zcash",
  ],
  openGraph: {
    title: "Privacy Roundtable",
    description:
      "Candid talks on privacy tech, crypto & digital freedom. Live on X Spaces.",
    url: SITE_URL,
    siteName: "Privacy Roundtable",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@PrivacyRndtable",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-ink font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
