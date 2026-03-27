import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/siteContent";

export default function HeroSection() {
  const { hero } = home;

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#C8102E" }}
      aria-label="Campaign hero"
    >
      {/* ── Banner image — full-width, no cropping ── */}
      <div className="relative w-full pt-16 md:pt-20">
        {/* Subtle gradient darkens the bottom edge so image blends into text area */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(200,16,46,0.85))",
          }}
          aria-hidden="true"
        />
        <Image
          src={hero.photo}
          alt={hero.photoAlt}
          width={851}
          height={315}
          priority
          sizes="100vw"
          className="block w-full h-auto"
          style={{ display: "block" }}
        />
      </div>

      {/* ── Text block ── */}
      <div
        className="relative"
        style={{ background: "#C8102E" }}
      >
        {/* Atmospheric depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 0% 0%, rgba(0,0,0,0.18) 0%, transparent 60%),
              radial-gradient(ellipse 50% 80% at 100% 100%, rgba(0,0,0,0.12) 0%, transparent 60%)
            `,
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-8">
          <p
            className="mb-5 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75"
          >
            {hero.eyebrow}
          </p>

          <h1
            className="mb-6 font-display text-white leading-none"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
              letterSpacing: "0.02em",
              maxWidth: "900px",
            }}
          >
            {hero.headline}
          </h1>

          <p
            className="mb-10 font-body text-white/85 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", maxWidth: "560px" }}
          >
            {hero.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={hero.ctaHref}
              className="btn-lift inline-block rounded px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white"
              style={{ background: "#0A1F44", letterSpacing: "0.1em" }}
            >
              {hero.ctaLabel}
            </Link>
            <Link
              href={hero.secondaryHref}
              className="btn-lift inline-block rounded px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white"
              style={{ border: "2px solid rgba(255,255,255,0.55)", letterSpacing: "0.1em" }}
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
