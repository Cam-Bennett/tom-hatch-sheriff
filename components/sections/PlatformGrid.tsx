import SectionHeader from "@/components/ui/SectionHeader";
import PlatformCard from "@/components/ui/PlatformCard";
import CTAButton from "@/components/ui/CTAButton";
import { home } from "@/content/siteContent";

export default function PlatformGrid() {
  const { platformPreview } = home;

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#F5F3F0" }}
      aria-label="Platform overview"
    >
      {/* Atmospheric overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 15% 100%, rgba(10,31,68,0.05) 0%, transparent 60%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow={platformPreview.eyebrow}
            headline={platformPreview.headline}
            eyebrowColor="red"
            headlineColor="navy"
          />
          <CTAButton
            href="/platform"
            label="Full Platform"
            variant="outline-red"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {platformPreview.cards.map((card) => (
            <PlatformCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              body={card.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
