import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
// The visitor's address is only used as reply-to, never as the sender.
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  const valid =
    name.length > 0 &&
    name.length <= 100 &&
    email.length <= 254 &&
    EMAIL_PATTERN.test(email) &&
    subject.length <= 200 &&
    message.length > 0 &&
    message.length <= 5000;

  if (!valid) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  try {
    await createTransporter().sendMail({
      from: process.env.SMTP_USER,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: `Dopyt z webu: ${subject || "bez predmetu"}`,
      text: `Meno: ${name}\nE-mail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    // Log only that sending failed. Never log credentials or the message content.
    console.error("Contact form: email could not be sent");
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
