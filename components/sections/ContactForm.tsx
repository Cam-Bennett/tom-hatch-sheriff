"use client";

import { useState, useRef } from "react";
import { contact } from "@/content/siteContent";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const { form } = contact;
  const [status, setStatus] = useState<FormStatus>("idle");
  const honeypotRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot check — bots fill hidden fields
    if (honeypotRef.current?.value) {
      setStatus("success"); // Silently succeed to fool bots
      return;
    }

    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="rounded-sm p-8 md:p-10"
      style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}
    >
      <h2
        className="mb-8 font-display"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#0A1F44", letterSpacing: "0.04em" }}
      >
        {form.heading}
      </h2>

      {status === "success" ? (
        <p
          className="rounded p-6 font-body text-base font-semibold"
          style={{ background: "rgba(10,31,68,0.06)", color: "#0A1F44" }}
          role="alert"
        >
          {form.successMessage}
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
          {/* Honeypot — hidden from real users */}
          <input
            ref={honeypotRef}
            type="text"
            name="website"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute opacity-0 pointer-events-none"
            autoComplete="off"
          />

          <div className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-1.5 block font-body text-sm font-semibold" style={{ color: "#374151" }}>
                Name <span aria-hidden="true" style={{ color: "#C8102E" }}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={form.namePlaceholder}
                className="w-full rounded px-4 py-3 font-body text-sm outline-none transition-colors duration-150"
                style={{
                  border: "1px solid rgba(0,0,0,0.2)",
                  color: "#111827",
                  background: "#fafafa",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#C8102E")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)")}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-1.5 block font-body text-sm font-semibold" style={{ color: "#374151" }}>
                Email <span aria-hidden="true" style={{ color: "#C8102E" }}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={form.emailPlaceholder}
                className="w-full rounded px-4 py-3 font-body text-sm outline-none transition-colors duration-150"
                style={{
                  border: "1px solid rgba(0,0,0,0.2)",
                  color: "#111827",
                  background: "#fafafa",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#C8102E")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)")}
              />
            </div>

            {/* Phone (optional) */}
            <div>
              <label htmlFor="phone" className="mb-1.5 block font-body text-sm font-semibold" style={{ color: "#374151" }}>
                Phone <span className="font-normal text-xs" style={{ color: "#9CA3AF" }}>(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder={form.phonePlaceholder}
                className="w-full rounded px-4 py-3 font-body text-sm outline-none transition-colors duration-150"
                style={{
                  border: "1px solid rgba(0,0,0,0.2)",
                  color: "#111827",
                  background: "#fafafa",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#C8102E")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)")}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="mb-1.5 block font-body text-sm font-semibold" style={{ color: "#374151" }}>
                Message <span aria-hidden="true" style={{ color: "#C8102E" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={form.messagePlaceholder}
                className="w-full rounded px-4 py-3 font-body text-sm outline-none transition-colors duration-150 resize-vertical"
                style={{
                  border: "1px solid rgba(0,0,0,0.2)",
                  color: "#111827",
                  background: "#fafafa",
                  minHeight: "120px",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#C8102E")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)")}
              />
            </div>

            {status === "error" && (
              <p className="font-body text-sm font-semibold" style={{ color: "#C8102E" }} role="alert">
                {form.errorMessage}
              </p>
            )}

            <div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-lift inline-block rounded px-8 py-3 font-body text-sm font-semibold uppercase tracking-widest text-white disabled:opacity-60"
                style={{ background: "#C8102E", letterSpacing: "0.1em" }}
              >
                {status === "loading" ? "Sending..." : form.submitLabel}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
