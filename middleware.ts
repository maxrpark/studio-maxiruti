import { NextResponse, type NextRequest } from "next/server";

const locales = ["en", "es"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a supported locale prefix (/en, /es)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Check cookie first, fallback to accept-language header
  let targetLocale = request.cookies.get("NEXT_LOCALE")?.value;

  if (!targetLocale || !locales.includes(targetLocale)) {
    const acceptLanguage = request.headers.get("accept-language") || "";
    targetLocale = acceptLanguage.includes("es") ? "es" : defaultLocale;
  }

  request.nextUrl.pathname = `/${targetLocale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(request.nextUrl);

  // Keep the locale cookie in sync
  response.cookies.set("NEXT_LOCALE", targetLocale, {
    path: "/",
    maxAge: 31536000,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|icons|thumbnails|favicon.ico).*)",
  ],
};
