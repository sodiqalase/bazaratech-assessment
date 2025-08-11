import { defaultUserObject,  } from "@/data/constant";
import { NextResponse } from "next/server";
export async function GET() {
    // Simulate delay
    await new Promise((r) => setTimeout(r, 500));

    return NextResponse.json({
        success: true,
        user: defaultUserObject,
    });
}
