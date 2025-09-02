import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📩 Incoming form data:", body); // <--- debug

    const { name, email, subject, reason, message } = body;

    const data = await resend.emails.send({
      from: "Your Site <onboarding@resend.dev>",
      to: "your@email.com",
      subject: `[Portfolio] ${subject || "New message"}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Reason: ${reason}
---
${message}
      `,
    });

    console.log("✅ Resend response:", data); // <--- debug
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("❌ API error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
