import type { Metadata } from "next";
import Image from "next/image";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import { about, site } from "@/content/siteContent";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title: about.meta.title,
    description: about.meta.description,
    url: `${site.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero
          eyebrow={about.hero.eyebrow}
          headline={about.hero.headline}
          subhead={about.hero.subhead}
        />

        {/* Legacy Intro */}
        <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#ffffff" }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 60% 40% at 90% 0%, rgba(200,16,46,0.04) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
            <SectionHeader
              eyebrow={about.legacyIntro.eyebrow}
              headline={about.legacyIntro.headline}
              eyebrowColor="red"
              headlineColor="navy"
            />
            <p className="mt-6 font-body text-base leading-relaxed" style={{ color: "#4B5563", fontSize: "1.0625rem" }}>
              {about.legacyIntro.body}
            </p>
          </div>
        </section>

        {/* Roots */}
        <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#F5F3F0" }}>
          <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
            <SectionHeader
              eyebrow={about.roots.eyebrow}
              headline={about.roots.headline}
              eyebrowColor="red"
              headlineColor="navy"
            />
            <p className="mt-6 font-body leading-relaxed" style={{ color: "#4B5563", fontSize: "1.0625rem" }}>
              {about.roots.body}
            </p>
          </div>
        </section>

        {/* Career */}
        <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#ffffff" }}>
          <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
            <SectionHeader
              eyebrow={about.career.eyebrow}
              headline={about.career.headline}
              eyebrowColor="red"
              headlineColor="navy"
            />
            <p className="mt-6 font-body leading-relaxed" style={{ color: "#4B5563", fontSize: "1.0625rem" }}>
              {about.career.body1}
            </p>
            <p className="mt-4 font-body leading-relaxed" style={{ color: "#4B5563", fontSize: "1.0625rem" }}>
              {about.career.body2}
            </p>
          </div>
        </section>

        {/* South County */}
        <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#0A1F44" }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 50% at 100% 50%, rgba(200,16,46,0.08) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
            <SectionHeader
              eyebrow={about.southCounty.eyebrow}
              headline={about.southCounty.headline}
              eyebrowColor="red"
              headlineColor="white"
            />
            <p className="mt-6 font-body leading-relaxed text-white/80" style={{ fontSize: "1.0625rem" }}>
              {about.southCounty.body}
            </p>
          </div>
        </section>

        {/* Personal / Family */}
        <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#ffffff" }}>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:items-center lg:gap-20">
              {/* Photo */}
              <div className="relative w-full max-w-sm flex-shrink-0 lg:max-w-md">
                <div
                  className="relative overflow-hidden rounded-sm"
                  style={{ aspectRatio: "4/3", boxShadow: "0 24px 64px rgba(0,0,0,0.10)" }}
                >
                  <Image
                    src={about.personal.photo}
                    alt={about.personal.photoAlt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 450px"
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Copy */}
              <div className="flex-1">
                <SectionHeader
                  eyebrow={about.personal.eyebrow}
                  headline={about.personal.headline}
                  eyebrowColor="red"
                  headlineColor="navy"
                />
                <p className="mt-6 font-body leading-relaxed" style={{ color: "#4B5563", fontSize: "1.0625rem" }}>
                  {about.personal.body}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section
          className="relative overflow-hidden py-20 md:py-24"
          style={{ background: "#C8102E" }}
          aria-label="Quote from Tom Hatch"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0.15) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <blockquote>
              <p
                className="font-display text-white leading-tight"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)", letterSpacing: "0.02em" }}
              >
                &ldquo;{about.pullQuote.quote}&rdquo;
              </p>
              <footer className="mt-8">
                <cite className="font-body text-sm font-semibold uppercase tracking-widest text-white/75 not-italic" style={{ letterSpacing: "0.12em" }}>
                  — {about.pullQuote.attribution}
                </cite>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "#F5F3F0" }}>
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <p className="mb-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#C8102E" }}>
              Primary August 18, 2026
            </p>
            <h2 className="mb-8 font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#0A1F44", letterSpacing: "0.02em" }}>
              READY TO SUPPORT TOM?
            </h2>
            <CTAButton href="/get-involved" label="Get Involved" variant="red" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
