// Ensure Node runtime (Resend SDK doesn't work on Edge)
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic validation
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const subject = String(body?.subject ?? "");
    const reason = String(body?.reason ?? "Contact form");
    const message = String(body?.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY not set on server." },
        { status: 500 }
      );
    }

    const data = await resend.emails.send({
      from: "Jacob Vazquez <hello@jacobvazquez.com>",
      to: ["vazquezjake@live.com"],
      subject: subject || `New message: ${reason}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        `Reason: ${reason}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    console.log("Resend response:", data);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    // type-safe error extraction
    const msg =
      typeof err === "object" && err !== null && "message" in err
        ? String((err as { message?: unknown }).message)
        : "Server error";
    console.error("Contact route error:", msg, err);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
