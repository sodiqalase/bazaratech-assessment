import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { TOKEN_NAME } from "./data/constant";


// Middleware to protect routes and handle authentication redirects
export function middleware(request: NextRequest) {
    const token = request.cookies.get(TOKEN_NAME)?.value;
    const path = request.nextUrl.pathname;

    // Allow static files and public assets
    if (
        path.startsWith("/_next") ||
        path.startsWith("/public") ||
        /\.(ico|png|jpg|jpeg|svg|webp|gif)$/i.test(path)
    ) {
        return NextResponse.next();
    }

    // Redirect unauthenticated users trying to access dashboard
    if (!token && path.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Redirect authenticated users away from login page
    if (token && path === "/login") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

// Matcher to exclude API, static, and image routes from middleware
export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|roppi-logo-white.svg|image/.*).*)",
    ],
};
