import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_TAGLINE, X_HANDLE } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DESCRIPTION =
  "Privacy Roundtable is a recurring X Spaces series of candid conversations on privacy tech, crypto and digital freedom — with builders from PIVX, Firo, Zano, Particl and BasicSwap DEX, plus guests across the privacy ecosystem. Watch replays, get the next space reminder, and browse the project directory.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Privacy Coin & Tech Talks on X Spaces | Privacy Roundtable",
  description: DESCRIPTION,
  keywords: [
    "privacy roundtable",
    "privacy coins",
    "privacy tech",
    "X Spaces",
    "crypto podcast",
    "digital freedom",
    "PIVX",
    "Firo",
    "Zano",
    "Particl",
    "BasicSwap",
    "Monero",
    "Zcash",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Privacy Roundtable — privacy coin & tech talks, live on X Spaces",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "Privacy Roundtable — candid talks on privacy tech, crypto & digital freedom. Live on X Spaces.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    title: "Privacy Roundtable — privacy coin & tech talks, live on X Spaces",
    description: SITE_TAGLINE,
    images: ["/og-card.png"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#08080a",
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
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
