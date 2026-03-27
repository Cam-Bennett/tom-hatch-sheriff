import type { Metadata } from "next";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import { PlatformFaqJsonLd } from "@/components/seo/JsonLd";
import { platform, site } from "@/content/siteContent";

export const metadata: Metadata = {
  title: platform.meta.title,
  description: platform.meta.description,
  alternates: { canonical: `${site.url}/platform` },
  openGraph: {
    title: platform.meta.title,
    description: platform.meta.description,
    url: `${site.url}/platform`,
  },
};

const sectionBgs = ["#ffffff", "#F5F3F0", "#ffffff", "#F5F3F0"] as const;

export default function PlatformPage() {
  return (
    <>
      <PlatformFaqJsonLd />
      <NavBar />
      <main>
        <PageHero
          eyebrow={platform.hero.eyebrow}
          headline={platform.hero.headline}
          subhead={platform.hero.subhead}
        />

        {/* Platform pillars */}
        {platform.pillars.map((pillar, i) => (
          <section
            key={pillar.id}
            id={pillar.id}
            className="relative overflow-hidden py-20 md:py-28"
            style={{ background: sectionBgs[i % sectionBgs.length] }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  i % 2 === 0
                    ? "radial-gradient(ellipse 60% 40% at 90% 0%, rgba(200,16,46,0.04) 0%, transparent 60%)"
                    : "radial-gradient(ellipse 60% 40% at 10% 100%, rgba(10,31,68,0.05) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
              <SectionHeader
                eyebrow={pillar.eyebrow}
                headline={pillar.headline}
                eyebrowColor="red"
                headlineColor="navy"
              />
              <div className="mt-8 space-y-5">
                <p className="font-body leading-relaxed" style={{ color: "#4B5563", fontSize: "1.0625rem" }}>
                  {pillar.body1}
                </p>
                <p className="font-body leading-relaxed" style={{ color: "#4B5563", fontSize: "1.0625rem" }}>
                  {pillar.body2}
                </p>
                <p className="font-body leading-relaxed" style={{ color: "#4B5563", fontSize: "1.0625rem" }}>
                  {pillar.body3}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* Facebook CTA */}
        <section
          className="relative overflow-hidden py-20 md:py-24"
          style={{ background: "#0A1F44" }}
          aria-label="Follow on Facebook"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,16,46,0.08) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
            <h2
              className="mb-4 font-display text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "0.02em" }}
            >
              {platform.facebookCTA.headline}
            </h2>
            <p className="mx-auto mb-8 font-body text-white/75 leading-relaxed" style={{ maxWidth: "500px", fontSize: "1.0625rem" }}>
              {platform.facebookCTA.body}
            </p>
            <CTAButton
              href={platform.facebookCTA.ctaHref}
              label={platform.facebookCTA.ctaLabel}
              variant="red"
              external
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
