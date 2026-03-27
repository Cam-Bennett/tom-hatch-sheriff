import type { Metadata } from "next";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { contact, site } from "@/content/siteContent";

export const metadata: Metadata = {
  title: contact.meta.title,
  description: contact.meta.description,
  alternates: { canonical: `${site.url}/contact` },
  openGraph: {
    title: contact.meta.title,
    description: contact.meta.description,
    url: `${site.url}/contact`,
  },
};

export default function ContactPage() {
  const { info } = contact;

  return (
    <>
      <NavBar />
      <main>
        <PageHero
          eyebrow={contact.hero.eyebrow}
          headline={contact.hero.headline}
          subhead={contact.hero.subhead}
        />

        <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#F5F3F0" }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 40% at 90% 0%, rgba(200,16,46,0.04) 0%, transparent 60%)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">

              {/* Contact info */}
              <div>
                <h2
                  className="mb-8 font-display"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#0A1F44", letterSpacing: "0.04em" }}
                >
                  DIRECT CONTACT
                </h2>
                <dl className="flex flex-col gap-6">
                  <div>
                    <dt className="mb-1 font-body text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#C8102E" }}>
                      Mailing Address
                    </dt>
                    <dd className="font-body text-base" style={{ color: "#374151" }}>
                      {info.address}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-body text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#C8102E" }}>
                      Phone
                    </dt>
                    <dd>
                      <a
                        href={`tel:${info.phone.replace(/\D/g, "")}`}
                        className="font-body text-base font-semibold transition-colors duration-150 hover:underline"
                        style={{ color: "#0A1F44" }}
                      >
                        {info.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-body text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#C8102E" }}>
                      Email
                    </dt>
                    <dd>
                      <a
                        href={`mailto:${info.email}`}
                        className="font-body text-base font-semibold transition-colors duration-150 hover:underline"
                        style={{ color: "#0A1F44" }}
                      >
                        {info.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-body text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#C8102E" }}>
                      Facebook
                    </dt>
                    <dd>
                      <a
                        href={info.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-base font-semibold transition-colors duration-150 hover:underline"
                        style={{ color: "#0A1F44" }}
                        aria-label="Tom Hatch For Sheriff on Facebook (opens in new tab)"
                      >
                        Tom Hatch For Sheriff
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Contact form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
