import { defaultUserObject, mockedJWT } from "@/data/constant";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
	const { email, password } = await req.json();

	// Simulate delay
	await new Promise((r) => setTimeout(r, 500));

	if (email === "admin@example.com" && password === "Password1!") {
		return NextResponse.json({
			success: true,
			token: mockedJWT,
			user: defaultUserObject,
		});
	}

	return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
