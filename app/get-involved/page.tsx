import type { Metadata } from "next";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import { getInvolved, site } from "@/content/siteContent";

export const metadata: Metadata = {
  title: getInvolved.meta.title,
  description: getInvolved.meta.description,
  alternates: { canonical: `${site.url}/get-involved` },
  openGraph: {
    title: getInvolved.meta.title,
    description: getInvolved.meta.description,
    url: `${site.url}/get-involved`,
  },
};

export default function GetInvolvedPage() {
  const gi = getInvolved;

  return (
    <>
      <NavBar />
      <main>
        <PageHero
          eyebrow={gi.hero.eyebrow}
          headline={gi.hero.headline}
          subhead={gi.hero.subhead}
        />

        {/* Step 1: Follow & Share */}
        <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#ffffff" }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 40% at 90% 0%, rgba(200,16,46,0.04) 0%, transparent 60%)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
            <SectionHeader eyebrow={gi.followShare.eyebrow} headline={gi.followShare.headline} eyebrowColor="red" headlineColor="navy" />
            <p className="mt-6 font-body leading-relaxed" style={{ color: "#4B5563", fontSize: "1.0625rem" }}>
              {gi.followShare.body}
            </p>
            <div className="mt-8">
              <CTAButton href={gi.followShare.ctaHref} label={gi.followShare.ctaLabel} variant="red" external />
            </div>
          </div>
        </section>

        {/* Step 2: Yard Sign */}
        <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#F5F3F0" }}>
          <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
            <SectionHeader eyebrow={gi.yardSign.eyebrow} headline={gi.yardSign.headline} eyebrowColor="red" headlineColor="navy" />
            <p className="mt-6 font-body leading-relaxed" style={{ color: "#4B5563", fontSize: "1.0625rem" }}>
              {gi.yardSign.body}
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <CTAButton href={gi.yardSign.ctaHref} label={gi.yardSign.ctaLabel} variant="navy" />
              <p className="font-body text-sm" style={{ color: "#6B7280" }}>{gi.yardSign.ctaNote}</p>
            </div>
          </div>
        </section>

        {/* Step 3: Volunteer */}
        <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#ffffff" }}>
          <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
            <SectionHeader eyebrow={gi.volunteer.eyebrow} headline={gi.volunteer.headline} eyebrowColor="red" headlineColor="navy" />
            <p className="mt-6 font-body leading-relaxed" style={{ color: "#4B5563", fontSize: "1.0625rem" }}>
              {gi.volunteer.body}
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <CTAButton href={gi.volunteer.ctaHref} label={gi.volunteer.ctaLabel} variant="red" />
              <p className="font-body text-sm" style={{ color: "#6B7280" }}>{gi.volunteer.ctaNote}</p>
            </div>
          </div>
        </section>

        {/* Step 4: Donate (pending mechanism) */}
        <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#F5F3F0" }}>
          <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
            <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#C8102E" }}>
              {gi.donate.eyebrow}
            </p>
            <h2 className="font-display leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#0A1F44", letterSpacing: "0.02em" }}>
              {gi.donate.headline}
            </h2>
            <div
              className="mt-8 rounded-sm p-8"
              style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <p className="font-body leading-relaxed" style={{ color: "#4B5563", fontSize: "1.0625rem" }}>
                {gi.donate.pendingText}
              </p>
              <div className="mt-6">
                <a
                  href={gi.donate.pendingCtaHref}
                  className="btn-lift inline-block rounded px-7 py-3 font-body text-sm font-semibold uppercase tracking-widest text-white"
                  style={{ background: "#C8102E", letterSpacing: "0.1em" }}
                >
                  {gi.donate.pendingCtaLabel}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Step 5: Talk to People */}
        <section
          className="relative overflow-hidden py-20 md:py-28"
          style={{ background: "#0A1F44" }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(200,16,46,0.08) 0%, transparent 60%)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
            <SectionHeader eyebrow={gi.talkToPeople.eyebrow} headline={gi.talkToPeople.headline} eyebrowColor="red" headlineColor="white" />
            <p className="mt-6 font-body leading-relaxed text-white/80" style={{ fontSize: "1.0625rem" }}>
              {gi.talkToPeople.body}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
