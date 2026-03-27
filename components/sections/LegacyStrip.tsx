import { home } from "@/content/siteContent";

export default function LegacyStrip() {
  const { legacyStrip } = home;

  return (
    <section
      className="py-12"
      style={{ background: "#0A1F44" }}
      aria-label="Tom Hatch legacy statistics"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul
          className="flex flex-col items-center gap-8 sm:flex-row sm:justify-around"
          role="list"
        >
          {legacyStrip.stats.map((stat, i) => (
            <li
              key={i}
              className="flex flex-col items-center text-center"
            >
              <span
                className="font-display text-white leading-none"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  letterSpacing: "0.04em",
                  color: "#C8102E",
                }}
              >
                {stat.value}
              </span>
              <span
                className="mt-2 font-body text-sm font-semibold uppercase tracking-widest text-white/60"
                style={{ letterSpacing: "0.12em" }}
              >
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
