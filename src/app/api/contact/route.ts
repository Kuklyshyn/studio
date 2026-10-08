import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9 ()-]+$/;

// A phone number has 7 to 15 digits. Spaces, brackets and dashes are allowed.
function isPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return PHONE_PATTERN.test(value) && digits.length >= 7 && digits.length <= 15;
}

function createTransporter() {
  const port = Number(process.env.SMTP_PORT ?? 465);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// Receives the contact form and emails the message to the studio mailbox.
// The visitor's e-mail, when given, is only used as reply-to, never as the sender.
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  // Honeypot: people never fill this hidden field, bots often do. Answer as if the message was sent.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const contact = String(body.contact ?? "").trim();
  const message = String(body.message ?? "").trim();
  const contactIsEmail = contact.length <= 254 && EMAIL_PATTERN.test(contact);

  const valid =
    name.length > 0 &&
    name.length <= 100 &&
    (contactIsEmail || isPhone(contact)) &&
    message.length > 0 &&
    message.length <= 5000 &&
    body.consent === true;

  if (!valid) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  try {
    await createTransporter().sendMail({
      from: process.env.SMTP_USER,
      replyTo: contactIsEmail ? contact : undefined,
      to: process.env.CONTACT_EMAIL,
      subject: `Dopyt z webu: ${name}`,
      text: `Meno: ${name}\nKontakt: ${contact}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    // Log only the SMTP error code. Never log credentials or the message content.
    const { code, responseCode } = (error ?? {}) as { code?: string; responseCode?: number };
    console.error("Contact form: email could not be sent", { code, responseCode });
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
