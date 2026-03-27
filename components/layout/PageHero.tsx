interface PageHeroProps {
  eyebrow: string;
  headline: string;
  subhead?: string;
}

export default function PageHero({ eyebrow, headline, subhead }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      style={{ background: "#C8102E" }}
      aria-label="Page header"
    >
      {/* Atmospheric overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 10% 0%, rgba(0,0,0,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 90% 100%, rgba(0,0,0,0.12) 0%, transparent 70%)
          `,
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p
          className="mb-4 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70"
        >
          {eyebrow}
        </p>
        <h1
          className="font-display text-white leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            letterSpacing: "0.02em",
            maxWidth: "900px",
          }}
        >
          {headline}
        </h1>
        {subhead && (
          <p
            className="mt-6 font-body text-white/80 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", maxWidth: "640px" }}
          >
            {subhead}
          </p>
        )}
      </div>
    </section>
  );
}
