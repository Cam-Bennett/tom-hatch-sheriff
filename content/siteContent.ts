// ============================================================
// Tom Hatch For Sheriff — Site Content
// All copy lives here. Never hardcode strings in page or
// component files. Update this file for any text changes.
// ============================================================

// -----------------------------------------------------------
// Site-wide
// -----------------------------------------------------------
export const site = {
  name: "Tom Hatch For Sheriff",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tomhatchforsheriff.com",
  legalLine:
    "Paid for by Tom Hatch For Sheriff Committee · PO Box 753, Big Piney, WY · tomhatchforsheriff@gmail.com",
  phone: "(307) 749-1877",
  email: "tomhatchforsheriff@gmail.com",
  facebook: process.env.NEXT_PUBLIC_FB_URL || "https://www.facebook.com/profile.php?id=61588552006953",
  primaryDate: "August 18, 2026",
  address: "PO Box 753, Big Piney, WY 83113",
};

// -----------------------------------------------------------
// Navigation
// -----------------------------------------------------------
export const nav = {
  brandMark: "Tom Hatch For Sheriff",
  links: [
    { label: "About", href: "/about" },
    { label: "Platform", href: "/platform" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
  ],
  ctaLabel: "Support Tom",
  ctaHref: "/get-involved",
};

// -----------------------------------------------------------
// Footer
// -----------------------------------------------------------
export const footer = {
  brandMark: "Tom Hatch For Sheriff",
  tagline: "Protecting Sublette County · Primary August 18, 2026",
  links: [
    { label: "About", href: "/about" },
    { label: "Platform", href: "/platform" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
  ],
  legalLine: site.legalLine,
};

// -----------------------------------------------------------
// Home Page
// -----------------------------------------------------------
export const home = {
  hero: {
    eyebrow: "Sublette County Sheriff · Primary August 18, 2026",
    headline: "A LIFETIME OF SERVICE. A CLEAR VISION FOR WHAT'S NEXT.",
    tagline:
      "Tom Hatch has spent 25 years protecting Sublette County. Now he's running to lead it — with the experience, values, and roots this county deserves.",
    ctaLabel: "Support Tom",
    ctaHref: "/get-involved",
    secondaryCta: "Learn His Story",
    secondaryHref: "/about",
    photo: "/images/tom-hatch-hero.png",
    photoAlt: "Tom Hatch, candidate for Sublette County Sheriff",
  },

  legacyStrip: {
    stats: [
      { value: "25 Years", label: "Serving Sublette County" },
      { value: "5th Generation", label: "Wyoming Family" },
      { value: "Big Piney Roots", label: "Born & Raised Here" },
    ],
  },

  storySnapshot: {
    eyebrow: "Who Is Tom Hatch",
    headline: "ROOTS IN THIS COUNTY. READY TO LEAD.",
    body1:
      "Tom Hatch didn't come here to advance a career — he came back because this is home. A fifth-generation Wyoming family, raised in Big Piney, Tom has spent his entire professional life in service to the people of Sublette County. Twenty-five years with the Sublette County Sheriff's Office, working every level from patrol deputy to his current role.",
    body2:
      "He knows this land. He knows these families. And he knows what the Sheriff's Office needs to function at the highest level — not because he read about it, but because he's lived it every day.",
    ctaLabel: "Read Tom's Full Story",
    ctaHref: "/about",
    photo: "/images/tom-hatch-headshot.jpg",
    photoAlt: "Tom Hatch in Sublette County",
  },

  platformPreview: {
    eyebrow: "Where Tom Stands",
    headline: "A PLATFORM BUILT ON EXPERIENCE",
    cards: [
      {
        icon: "shield" as const,
        title: "PUBLIC SAFETY FIRST",
        body: "Response times that match the geography of this county. Deputies who know the terrain — and the people on it.",
      },
      {
        icon: "users" as const,
        title: "COMMUNITY TRUST",
        body: "Transparency, accountability, and open communication between the Sheriff's Office and the residents it serves.",
      },
      {
        icon: "map" as const,
        title: "SOUTH COUNTY PRESENCE",
        body: "Big Piney and Marbleton deserve the same level of service as Pinedale. Tom will make that happen.",
      },
      {
        icon: "star" as const,
        title: "EXPERIENCED LEADERSHIP",
        body: "Twenty-five years of institutional knowledge. A Sheriff who knows the job on day one.",
      },
    ],
  },

  testimonials: {
    eyebrow: "What People Are Saying",
    headline: "TRUSTED BY THIS COMMUNITY",
    items: [
      {
        quote:
          "Tom has been a consistent, dependable presence in this county for as long as I can remember. He has my full support.",
        name: "Local Resident",
        location: "Pinedale, WY",
      },
      {
        quote:
          "The kind of man who does the right thing whether anyone is watching or not. That's what we need in our Sheriff.",
        name: "Community Member",
        location: "Big Piney, WY",
      },
      {
        quote:
          "Tom's connection to south county is real — not political. He grew up here. He gets it.",
        name: "Sublette County Resident",
        location: "Marbleton, WY",
      },
    ],
  },

  primaryDateCTA: {
    eyebrow: "Mark Your Calendar",
    headline: "PRIMARY ELECTION: AUGUST 18, 2026",
    body: "Make your voice heard. Tom Hatch is on the Republican primary ballot for Sublette County Sheriff. Early voting information will be posted here as it becomes available.",
    ctaLabel: "Get Involved Now",
    ctaHref: "/get-involved",
  },
};

// -----------------------------------------------------------
// About Page
// -----------------------------------------------------------
export const about = {
  meta: {
    title: "About Tom Hatch | 25 Years of Service in Sublette County",
    description:
      "Fifth-generation Wyoming family. Born and raised in Big Piney. 25 years with the Sublette County Sheriff's Office. Learn Tom Hatch's story.",
  },
  hero: {
    eyebrow: "Tom's Story",
    headline: "25 YEARS OF SERVICE. A LIFETIME OF ROOTS.",
    subhead: "Fifth-generation Wyoming. Born in Big Piney. Built for this.",
  },
  legacyIntro: {
    eyebrow: "The Foundation",
    headline: "A FAMILY BUILT ON THIS LAND",
    body: "The Hatch family has called Wyoming home for five generations. Tom was born and raised in Big Piney, surrounded by the mountains, the ranches, and the communities that define Sublette County. This isn't a place he moved to for opportunity — it's the place that shaped everything about who he is. That connection runs deep and runs permanent.",
  },
  roots: {
    eyebrow: "Born Here",
    headline: "BIG PINEY IS HOME",
    body: "Growing up in Big Piney gave Tom something no resume can replicate: a firsthand understanding of rural Wyoming life. The isolation, the self-reliance, the pride of community — and the very real challenges that come with living far from the nearest city. He's not interpreting this county from the outside. He's lived it from birth.",
  },
  career: {
    eyebrow: "25 Years of Service",
    headline: "A CAREER BUILT FROM THE GROUND UP",
    body1:
      "Tom joined the Sublette County Sheriff's Office and has spent 25 years working every level of the job. Patrol. Investigations. Leadership. He's seen what works, what doesn't, and what the office needs to serve this county the right way.",
    body2:
      "That institutional knowledge isn't something you can fast-track. It's earned through years of showing up, doing the hard work, and earning the trust of the people you serve. Tom has done that — day after day, year after year, in weather and conditions that test anyone's commitment.",
  },
  southCounty: {
    eyebrow: "South County",
    headline: "BIG PINEY AND MARBLETON DESERVE MORE",
    body: "One of Tom's clearest commitments is to south county — the communities of Big Piney and Marbleton that too often feel like an afterthought in county-wide decisions. Tom grew up there. His roots are there. And as Sheriff, he will ensure that south county receives the same level of service, attention, and respect as the northern end of the county. This is personal, not political.",
  },
  personal: {
    eyebrow: "Outside the Badge",
    headline: "A MAN ROOTED IN FAMILY AND FAITH",
    body: "Tom is a family man first. Married and raising daughters in the same community where he grew up — the kind of continuity that's increasingly rare and deeply meaningful. His faith, his family, and his land are the anchors that shape how he leads, how he listens, and how he makes decisions under pressure.",
    photo: "/images/tom-hatch-family.jpg",
    photoAlt: "Tom Hatch with his family",
  },
  pullQuote: {
    quote:
      "I'm not running because I want a title. I'm running because I love this county, I know this job, and I believe we can do it better.",
    attribution: "Tom Hatch",
  },
};

// -----------------------------------------------------------
// Platform Page
// -----------------------------------------------------------
export const platform = {
  meta: {
    title: "Tom Hatch's Platform | Sublette County Sheriff 2026",
    description:
      "Tom Hatch's platform for Sublette County Sheriff: Public Safety, Community Trust, South County Equity, and Experienced Leadership.",
  },
  hero: {
    eyebrow: "Where Tom Stands",
    headline: "CLEAR POSITIONS. NO AMBIGUITY.",
    subhead:
      "Tom Hatch isn't running on vague promises. Here's exactly where he stands on the issues that matter most to Sublette County.",
  },
  pillars: [
    {
      id: "public-safety",
      eyebrow: "Pillar One",
      headline: "PUBLIC SAFETY FIRST",
      body1:
        "The first job of any Sheriff is to keep people safe. For Sublette County, that means building a department that can respond effectively across a massive geographic area — from Pinedale to the southern reaches of the county — in all conditions, all seasons.",
      body2:
        "Tom's priority is response capability: enough staffed, trained deputies to cover the county, equipment that works in Wyoming winters, and protocols built for rural reality rather than urban models imported from somewhere else.",
      body3:
        "Twenty-five years in this office means Tom knows exactly where the gaps are and what it takes to fill them. No learning curve. No guesswork. Day one readiness.",
    },
    {
      id: "community-trust",
      eyebrow: "Pillar Two",
      headline: "COMMUNITY TRUST & TRANSPARENCY",
      body1:
        "The Sheriff's Office exists to serve the public — and that relationship only works when the public trusts the people carrying the badge. Tom believes in open, honest communication between the department and the residents it serves.",
      body2:
        "That means being accessible. Showing up at community events. Answering questions directly. Publishing the information residents deserve to have. It means treating every person — regardless of their address, background, or politics — with the same respect and professionalism.",
      body3:
        "Trust isn't claimed. It's earned through consistent, transparent behavior over time. Tom has been building that trust in this county for 25 years, and he will continue that work as Sheriff.",
    },
    {
      id: "south-county",
      eyebrow: "Pillar Three",
      headline: "SOUTH COUNTY EQUITY",
      body1:
        "Big Piney and Marbleton are not afterthoughts. They are full communities with real needs, real families, and a legitimate expectation of public safety coverage on par with northern Sublette County.",
      body2:
        "Tom's roots are in Big Piney. He knows what south county residents deal with — longer response times, less visibility, the sense that decisions are being made far away by people who don't know the territory. He will change that.",
      body3:
        "As Sheriff, Tom will ensure that south county has adequate staffing, proper facilities support, and direct representation in how the department is run. Geographic equity is a core commitment, not a campaign talking point.",
    },
    {
      id: "experienced-leadership",
      eyebrow: "Pillar Four",
      headline: "EXPERIENCED LEADERSHIP",
      body1:
        "Running a Sheriff's Office is not an entry-level position. It requires institutional knowledge, leadership under pressure, and the ability to manage personnel, budget, and community relationships simultaneously — while maintaining your own judgment and integrity.",
      body2:
        "Tom brings 25 years of that experience to this race. He's not a politician who's done a ride-along. He's a working law enforcement professional who has handled the full spectrum of what this county demands — from routine patrol to complex investigations to emergency response.",
      body3:
        "Experience doesn't mean resistance to change. It means you know which changes actually make things better — and which ones sound good in a campaign speech but fall apart in practice. Tom knows the difference.",
    },
  ],
  facebookCTA: {
    headline: "FOLLOW THE CAMPAIGN",
    body: "Stay current on Tom's platform, events, and primary updates by following on Facebook.",
    ctaLabel: "Follow on Facebook",
    ctaHref: process.env.NEXT_PUBLIC_FB_URL || "https://www.facebook.com/profile.php?id=61588552006953",
  },
};

// -----------------------------------------------------------
// Get Involved Page
// -----------------------------------------------------------
export const getInvolved = {
  meta: {
    title: "Support Tom Hatch | Sublette County Sheriff Primary",
    description:
      "Follow on Facebook, request a yard sign, volunteer, or donate. Help Tom Hatch become the next Sublette County Sheriff.",
  },
  hero: {
    eyebrow: "Support Tom",
    headline: "GET INVOLVED. MAKE IT HAPPEN.",
    subhead:
      "Every campaign is built by people who show up. Here's how you can help Tom Hatch become the next Sublette County Sheriff.",
  },
  followShare: {
    eyebrow: "Step One",
    headline: "FOLLOW & SHARE",
    body: "The single fastest thing you can do: follow Tom on Facebook and share his page with your network. Most Sublette County voters will see this campaign through Facebook first. Your share is a direct endorsement to everyone in your circle.",
    ctaLabel: "Follow on Facebook",
    ctaHref: process.env.NEXT_PUBLIC_FB_URL || "https://www.facebook.com/profile.php?id=61588552006953",
  },
  yardSign: {
    eyebrow: "Step Two",
    headline: "REQUEST A YARD SIGN",
    body: "Yard signs build visible momentum — and in a county like Sublette, where everyone knows everyone, your sign sends a clear message to your neighbors. Request one and we'll get it to you.",
    ctaLabel: "Request a Yard Sign",
    ctaHref: "/contact",
    ctaNote: "Send a message through the contact form requesting a sign and your address.",
  },
  volunteer: {
    eyebrow: "Step Three",
    headline: "VOLUNTEER",
    body: "The campaign needs people willing to knock doors, make calls, staff events, and help spread the word in their communities. If you're willing to give time, we'll put it to good use.",
    ctaLabel: "Sign Up to Volunteer",
    ctaHref: "/contact",
    ctaNote: "Send a message through the contact form and tell us how you'd like to help.",
  },
  donate: {
    mechanism: "pending" as "pending" | "venmo" | "paypal",
    link: "",
    eyebrow: "Step Four",
    headline: "DONATE",
    pendingText:
      "Donation information coming soon. Contact Tom directly to support the campaign financially.",
    pendingCtaLabel: "Contact Tom",
    pendingCtaHref: "mailto:tomhatchforsheriff@gmail.com",
  },
  talkToPeople: {
    eyebrow: "Step Five",
    headline: "TALK TO PEOPLE",
    body: "The most powerful thing in any local election is a personal conversation. Tell your neighbors, your co-workers, your family — why you're supporting Tom. Personal endorsements from trusted people move votes more than any advertisement.",
  },
};

// -----------------------------------------------------------
// Contact Page
// -----------------------------------------------------------
export const contact = {
  meta: {
    title: "Contact Tom Hatch For Sheriff | Big Piney, Wyoming",
    description:
      "Get in touch with the Tom Hatch For Sheriff campaign. Questions, yard signs, volunteer sign-ups, and media inquiries.",
  },
  hero: {
    eyebrow: "Get in Touch",
    headline: "CONTACT THE CAMPAIGN",
    subhead:
      "Questions, media inquiries, yard sign requests, or volunteer sign-ups — reach out directly.",
  },
  info: {
    address: "PO Box 753, Big Piney, WY 83113",
    phone: "(307) 749-1877",
    email: "tomhatchforsheriff@gmail.com",
    facebook: process.env.NEXT_PUBLIC_FB_URL || "https://www.facebook.com/profile.php?id=61588552006953",
  },
  form: {
    heading: "SEND A MESSAGE",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    phonePlaceholder: "Phone (optional)",
    messagePlaceholder: "Your message...",
    submitLabel: "Send Message",
    successMessage: "Message sent. Tom's team will be in touch soon.",
    errorMessage:
      "Something went wrong. Please try emailing directly at tomhatchforsheriff@gmail.com",
  },
};
