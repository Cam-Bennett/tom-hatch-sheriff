interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
}

export default function TestimonialCard({ quote, name, location }: TestimonialCardProps) {
  return (
    <article
      className="flex flex-col rounded-sm p-8"
      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
    >
      {/* Quotemark */}
      <span
        className="mb-4 block font-display leading-none select-none"
        aria-hidden="true"
        style={{ fontSize: "4rem", color: "#C8102E", lineHeight: 1 }}
      >
        &ldquo;
      </span>
      <p
        className="mb-6 flex-1 font-body text-base leading-relaxed text-white/90"
        style={{ fontSize: "1.0625rem" }}
      >
        {quote}
      </p>
      <footer>
        <p className="font-body text-sm font-semibold text-white">{name}</p>
        <p className="font-body text-xs text-white/50 mt-0.5">{location}</p>
      </footer>
    </article>
  );
}
