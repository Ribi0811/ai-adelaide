import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/constants";

interface ContactPayload {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string;
}

function clean(value: string | undefined) {
  return value?.trim() || "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot
  if (clean(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const message = clean(payload.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in name, email, and your message." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const formsubmitPayload = {
    _subject: `New enquiry from ${name} — AI Adelaide`,
    _captcha: "false",
    _template: "table",
    _replyto: email,
    name,
    email,
    phone: clean(payload.phone) || "Not provided",
    business: clean(payload.business) || "Not provided",
    service: clean(payload.service) || "Not provided",
    message,
  };

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: siteConfig.url,
          Referer: `${siteConfig.url}/contact`,
        },
        body: JSON.stringify(formsubmitPayload),
      },
    );

    const raw = await response.text();
    let result = {} as {
      success?: string | boolean;
      message?: string;
    };

    try {
      result = (JSON.parse(raw || "{}") as {
        success?: string | boolean;
        message?: string;
      }) || {};
    } catch {
      result = {};
    }

    const fallbackMessage =
      raw && raw.length < 280
        ? raw
        : "Could not send right now. Please email us directly.";
    const errorMessage = result.message || fallbackMessage;
    const activationDetected = /needs\s*Activation|Activate Form/i.test(
      `${result.message || ""} ${raw}`,
    );
    const publicErrorMessage = activationDetected
      ? `Form is awaiting activation. Open the FormSubmit email sent to ${siteConfig.email} and click "Activate Form", then try again.`
      : errorMessage;

    if (!response.ok || result.success === "false" || result.success === false) {
      return NextResponse.json(
        { ok: false, error: publicErrorMessage },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error while sending to FormSubmit", {
      email: siteConfig.email,
      error,
    });
    return NextResponse.json(
      { ok: false, error: "Could not send right now. Please email us directly." },
      { status: 502 },
    );
  }
}
