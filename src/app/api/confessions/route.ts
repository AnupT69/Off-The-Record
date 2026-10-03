import { NextResponse } from "next/server";
import { getApprovedConfessions, createConfession } from "@/lib/confessions";
import { CreateConfessionPayload } from "@/types/confession";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const confessions = await getApprovedConfessions();
    return NextResponse.json({
      success: true,
      data: confessions,
      count: confessions.length,
    });
  } catch (error) {
    console.error("GET /api/confessions error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch confessions" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body: CreateConfessionPayload = await request.json();

    if (!body.confession || typeof body.confession !== "string") {
      return NextResponse.json(
        { success: false, error: "Confession text is required" },
        { status: 400 }
      );
    }

    const trimmed = body.confession.trim();
    if (trimmed.length < 10) {
      return NextResponse.json(
        { success: false, error: "Confession must be at least 10 characters" },
        { status: 400 }
      );
    }

    if (trimmed.length > 1000) {
      return NextResponse.json(
        { success: false, error: "Confession cannot exceed 1000 characters" },
        { status: 400 }
      );
    }

    const validRoles = [
      "CFO",
      "CTO",
      "CIO",
      "Finance Leader",
      "Technology Leader",
      "Other",
    ];

    const role = body.role && validRoles.includes(body.role) ? body.role : "Other";

    const newConfession = await createConfession({
      confession: trimmed,
      role: role as any,
      prompt: body.prompt,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Confession recorded anonymously",
        data: newConfession,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/confessions error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process confession" },
      { status: 500 }
    );
  }
}
