import type { Metadata } from "next";
import { Bebas_Neue, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SiteJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tom Hatch For Sheriff | Sublette County Sheriff Primary 2026",
  description:
    "Tom Hatch is running for Sublette County Sheriff. 25 years of service, fifth-generation Wyoming family, born and raised in Big Piney. Primary: August 18, 2026.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://tomhatchforsheriff.com"
  ),
  openGraph: {
    type: "website",
    siteName: "Tom Hatch For Sheriff",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${sourceSans.variable}`}>
      <head>
        <SiteJsonLd />
      </head>
      <body className="font-body antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
