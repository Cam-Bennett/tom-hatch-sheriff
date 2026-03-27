import type { Metadata } from "next";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import LegacyStrip from "@/components/sections/LegacyStrip";
import StorySectionHome from "@/components/sections/StorySectionHome";
import PlatformGrid from "@/components/sections/PlatformGrid";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PrimaryDateCTA from "@/components/sections/PrimaryDateCTA";
import { site } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Tom Hatch For Sheriff | Sublette County Sheriff Primary 2026",
  description:
    "Tom Hatch is running for Sublette County Sheriff. 25 years of service, fifth-generation Wyoming family, born and raised in Big Piney. Primary: August 18, 2026.",
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: "Tom Hatch For Sheriff | Sublette County Sheriff Primary 2026",
    description:
      "Tom Hatch is running for Sublette County Sheriff. 25 years of service, fifth-generation Wyoming family, born and raised in Big Piney.",
    url: site.url,
    images: [
      {
        url: `${site.url}/og-home.png`,
        width: 1200,
        height: 630,
        alt: "Tom Hatch For Sheriff",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <LegacyStrip />
        <StorySectionHome />
        <PlatformGrid />
        <TestimonialsSection />
        <PrimaryDateCTA />
      </main>
      <Footer />
    </>
  );
}
