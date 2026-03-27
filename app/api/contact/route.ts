import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  website?: string; // honeypot field
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    // Honeypot check — if "website" field is filled, it's a bot
    if (body.website) {
      // Return 200 to avoid giving bots feedback
      return NextResponse.json({ ok: true });
    }

    // Server-side validation
    if (!body.name || typeof body.name !== "string" || body.name.trim().length < 2) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if (!body.email || !isValidEmail(body.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!body.message || typeof body.message !== "string" || body.message.trim().length < 10) {
      return NextResponse.json({ error: "Message too short" }, { status: 400 });
    }

    const name = body.name.trim().slice(0, 200);
    const email = body.email.trim().slice(0, 200);
    const phone = (body.phone || "").trim().slice(0, 50);
    const message = body.message.trim().slice(0, 5000);

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Tom Hatch For Sheriff <noreply@tomhatchforsheriff.com>",
      to: ["tomhatchforsheriff@gmail.com"],
      replyTo: email,
      subject: `Website message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : "",
        ``,
        `Message:`,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
