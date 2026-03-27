import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { home } from "@/content/siteContent";

export default function TestimonialsSection() {
  const { testimonials } = home;

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#0A1F44" }}
      aria-label="Testimonials"
    >
      {/* Atmospheric overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 85% 20%, rgba(200,16,46,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 10% 80%, rgba(200,16,46,0.05) 0%, transparent 60%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <SectionHeader
            eyebrow={testimonials.eyebrow}
            headline={testimonials.headline}
            eyebrowColor="red"
            headlineColor="white"
            centered
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <TestimonialCard
              key={i}
              quote={item.quote}
              name={item.name}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
