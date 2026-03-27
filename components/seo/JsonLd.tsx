import { site } from "@/content/siteContent";

// Site-wide schema: Person + Organization + WebSite
// These are injected into <head> via layout.tsx
export function SiteJsonLd() {
  const siteUrl = site.url;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Tom Hatch",
        jobTitle: "Candidate for Sublette County Sheriff",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Big Piney",
          addressRegion: "WY",
          postalCode: "83113",
          addressCountry: "US",
        },
        telephone: site.phone,
        sameAs: [site.facebook],
        worksFor: { "@id": `${siteUrl}/#org` },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#org`,
        name: "Tom Hatch For Sheriff Committee",
        address: {
          "@type": "PostalAddress",
          streetAddress: "PO Box 753",
          addressLocality: "Big Piney",
          addressRegion: "WY",
          postalCode: "83113",
          addressCountry: "US",
        },
        email: site.email,
        url: siteUrl,
        publisher: { "@id": `${siteUrl}/#website` },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Tom Hatch For Sheriff",
        publisher: { "@id": `${siteUrl}/#org` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Per-page WebPage schema
interface WebPageJsonLdProps {
  title: string;
  description: string;
  url: string;
}

export function WebPageJsonLd({ title, description, url }: WebPageJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${site.url}/#website` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Platform page FAQ schema
export function PlatformFaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Tom Hatch's position on public safety?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tom Hatch prioritizes response capability: enough staffed, trained deputies to cover Sublette County's geography, equipment that works in Wyoming winters, and protocols built for rural reality.",
        },
      },
      {
        "@type": "Question",
        name: "How will Tom Hatch build community trust?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tom believes in open, honest communication between the Sheriff's Office and residents — being accessible, showing up at community events, and treating every person with the same respect and professionalism.",
        },
      },
      {
        "@type": "Question",
        name: "What is Tom Hatch's commitment to south Sublette County?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As Sheriff, Tom will ensure Big Piney and Marbleton have adequate staffing, proper facilities support, and direct representation in how the department is run. Geographic equity is a core commitment.",
        },
      },
      {
        "@type": "Question",
        name: "What experience does Tom Hatch bring to the Sheriff race?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tom Hatch brings 25 years of service with the Sublette County Sheriff's Office, working every level from patrol deputy to leadership — handling the full spectrum from routine patrol to complex investigations.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
