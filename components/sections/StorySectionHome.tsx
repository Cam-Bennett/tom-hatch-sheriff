import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import { home } from "@/content/siteContent";

export default function StorySectionHome() {
  const { storySnapshot } = home;

  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ background: "#ffffff" }}>
      {/* Atmospheric overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 100% 0%, rgba(200,16,46,0.04) 0%, transparent 60%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">

          {/* Photo */}
          <div className="relative w-full max-w-sm flex-shrink-0 lg:max-w-md">
            <div
              className="relative overflow-hidden rounded-sm"
              style={{
                aspectRatio: "4/5",
                boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src={storySnapshot.photo}
                alt={storySnapshot.photoAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 450px"
                className="object-cover object-top"
              />
            </div>
            {/* Red accent bar */}
            <div
              className="absolute -left-4 top-8 h-24 w-1.5 rounded-full"
              style={{ background: "#C8102E" }}
              aria-hidden="true"
            />
          </div>

          {/* Copy */}
          <div className="flex-1">
            <SectionHeader
              eyebrow={storySnapshot.eyebrow}
              headline={storySnapshot.headline}
              eyebrowColor="red"
              headlineColor="navy"
            />
            <p
              className="mt-6 font-body leading-relaxed"
              style={{ color: "#4B5563", fontSize: "1.0625rem" }}
            >
              {storySnapshot.body1}
            </p>
            <p
              className="mt-4 font-body leading-relaxed"
              style={{ color: "#4B5563", fontSize: "1.0625rem" }}
            >
              {storySnapshot.body2}
            </p>
            <div className="mt-8">
              <CTAButton
                href={storySnapshot.ctaHref}
                label={storySnapshot.ctaLabel}
                variant="red"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
