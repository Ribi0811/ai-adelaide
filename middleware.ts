import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PRIMARY_HOST = "aiadelaide.com.au";
const WWW_HOST = "www.aiadelaide.com.au";

function isVercelHost(host: string) {
  return host.endsWith(".vercel.app");
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const isProduction = process.env.VERCEL_ENV === "production";

  if (host === WWW_HOST || (isProduction && isVercelHost(host))) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = "https";
    redirectUrl.host = PRIMARY_HOST;
    return NextResponse.redirect(redirectUrl, 308);
  }

  const response = NextResponse.next();

  if (isVercelHost(host)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
