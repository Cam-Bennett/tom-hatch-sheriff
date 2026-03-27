import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/siteContent";

export default function HeroSection() {
  const { hero } = home;

  return (
    <section
      className="relative min-h-screen overflow-hidden pt-24 md:pt-0"
      style={{ background: "#C8102E" }}
      aria-label="Campaign hero"
    >
      {/* Atmospheric overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 0% 30%, rgba(0,0,0,0.25) 0%, transparent 60%),
            radial-gradient(ellipse 50% 80% at 100% 80%, rgba(0,0,0,0.15) 0%, transparent 60%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center gap-12 py-24 md:flex-row md:items-center md:gap-16 md:py-0">

          {/* Text column */}
          <div className="flex-1 pt-8 md:pt-0">
            <p
              className="mb-6 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75"
            >
              {hero.eyebrow}
            </p>

            <h1
              className="mb-8 font-display text-white leading-none"
              style={{
                fontSize: "clamp(2.8rem, 6.5vw, 6rem)",
                letterSpacing: "0.02em",
              }}
            >
              {hero.headline}
            </h1>

            <p
              className="mb-10 font-body text-white/85 leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", maxWidth: "560px" }}
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
                style={{
                  border: "2px solid rgba(255,255,255,0.55)",
                  letterSpacing: "0.1em",
                }}
              >
                {hero.secondaryCta}
              </Link>
            </div>
          </div>

          {/* Photo column */}
          <div className="relative w-full max-w-sm flex-shrink-0 md:max-w-md lg:max-w-lg">
            <div
              className="relative overflow-hidden rounded-sm"
              style={{
                aspectRatio: "3/4",
                boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
              }}
            >
              <Image
                src={hero.photo}
                alt={hero.photoAlt}
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 500px"
                className="object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
