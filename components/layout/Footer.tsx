import Link from "next/link";
import { footer, site } from "@/content/siteContent";

export default function Footer() {
  return (
    <footer style={{ background: "#060F22" }} aria-label="Site footer">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand block */}
          <div>
            <p
              className="font-display text-2xl text-white"
              style={{ letterSpacing: "0.06em" }}
            >
              {footer.brandMark}
            </p>
            <p
              className="mt-2 font-body text-sm text-white/50"
              style={{ letterSpacing: "0.04em" }}
            >
              {footer.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3" role="list">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm font-semibold uppercase tracking-widest text-white/60 transition-colors duration-150 hover:text-white"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Facebook link */}
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lift inline-block rounded px-5 py-2.5 font-body text-sm font-semibold uppercase tracking-widest text-white transition-colors duration-150"
            style={{ background: "#C8102E", letterSpacing: "0.1em" }}
            aria-label="Follow Tom Hatch on Facebook (opens in new tab)"
          >
            Follow on Facebook
          </a>
        </div>
      </div>

      {/* Legal line */}
      <div
        className="border-t border-white/10"
        style={{ background: "#060F22" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <p className="font-body text-xs text-white/40 text-center">
            {footer.legalLine}
          </p>
        </div>
      </div>
    </footer>
  );
}
