"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/siteContent";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{ background: "#0A1F44" }}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Brand mark */}
          <Link
            href="/"
            className="font-display text-xl tracking-wide text-white hover:text-red-400 transition-colors duration-150"
            style={{ color: "#ffffff", letterSpacing: "0.06em" }}
          >
            {nav.brandMark}
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex" role="list">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-body text-sm font-semibold uppercase tracking-widest transition-colors duration-150 ${
                    pathname === link.href
                      ? "text-red-DEFAULT"
                      : "text-white/80 hover:text-white"
                  }`}
                  style={{
                    color:
                      pathname === link.href
                        ? "#C8102E"
                        : undefined,
                    letterSpacing: "0.1em",
                  }}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href={nav.ctaHref}
              className="btn-lift inline-block rounded px-6 py-2.5 font-body text-sm font-semibold uppercase tracking-widest text-white transition-colors duration-150"
              style={{
                background: "#C8102E",
                letterSpacing: "0.1em",
              }}
            >
              {nav.ctaLabel}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{ background: "#0A1F44" }}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col items-center gap-8" role="list">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display text-4xl text-white transition-colors duration-150 hover:text-red-DEFAULT"
                  style={{
                    color:
                      pathname === link.href ? "#C8102E" : "#ffffff",
                    letterSpacing: "0.08em",
                  }}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                href={nav.ctaHref}
                className="btn-lift inline-block rounded px-8 py-3 font-body text-base font-semibold uppercase tracking-widest text-white"
                style={{ background: "#C8102E", letterSpacing: "0.1em" }}
              >
                {nav.ctaLabel}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
