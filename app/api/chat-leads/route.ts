import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/chat-leads";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const lead = await saveLead(payload);
    return NextResponse.json({ ok: true, lead });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not save lead." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    error: "Use Mission Control or inspect data/chat-leads.json directly for now.",
  });
}
