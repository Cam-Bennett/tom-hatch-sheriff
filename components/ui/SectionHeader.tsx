interface SectionHeaderProps {
  eyebrow: string;
  headline: string;
  eyebrowColor?: "red" | "white" | "navy";
  headlineColor?: "navy" | "white" | "dark";
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  headline,
  eyebrowColor = "red",
  headlineColor = "navy",
  centered = false,
}: SectionHeaderProps) {
  const eyebrowStyles: Record<string, string> = {
    red: "#C8102E",
    white: "rgba(255,255,255,0.7)",
    navy: "#0A1F44",
  };

  const headlineStyles: Record<string, string> = {
    navy: "#0A1F44",
    white: "#ffffff",
    dark: "#111827",
  };

  return (
    <div className={centered ? "text-center" : ""}>
      <p
        className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.18em]"
        style={{ color: eyebrowStyles[eyebrowColor] }}
      >
        {eyebrow}
      </p>
      <h2
        className="font-display leading-tight"
        style={{
          fontSize: "clamp(2rem, 4vw, 3.25rem)",
          color: headlineStyles[headlineColor],
          letterSpacing: "0.02em",
        }}
      >
        {headline}
      </h2>
    </div>
  );
}
