import CTAButton from "@/components/ui/CTAButton";
import { home } from "@/content/siteContent";

export default function PrimaryDateCTA() {
  const { primaryDateCTA } = home;

  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{ background: "#C8102E" }}
      aria-label="Primary election call to action"
    >
      {/* Atmospheric overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,0,0,0.12) 0%, transparent 70%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p
          className="mb-4 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70"
        >
          {primaryDateCTA.eyebrow}
        </p>
        <h2
          className="mb-6 font-display text-white leading-tight"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
            letterSpacing: "0.02em",
          }}
        >
          {primaryDateCTA.headline}
        </h2>
        <p
          className="mx-auto mb-10 font-body text-white/85 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.125rem)", maxWidth: "600px" }}
        >
          {primaryDateCTA.body}
        </p>
        <CTAButton
          href={primaryDateCTA.ctaHref}
          label={primaryDateCTA.ctaLabel}
          variant="navy"
        />
      </div>
    </section>
  );
}
