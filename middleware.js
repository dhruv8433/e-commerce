import Cookies from "js-cookie";
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

export default createMiddleware({
  locales: ["en", "hi", "fr"],
  defaultLocale: "en",
});

export async function middleware(request) {
  const isAuthenticate = request.cookies.get("authenticated")?.value === "true";
  const { pathname } = request.nextUrl;

  console.log("Path:", pathname);
  console.log("Authenticated:", isAuthenticate);

  if (pathname == "/") {
    Cookies.set("locale", "en");
    return NextResponse.rewrite(new URL("/en", request.url));
  }

  if (
    !pathname.startsWith("/en") &&
    !pathname.startsWith("/hi") &&
    !pathname.startsWith("/fr")
  ) {
    const locale = request.cookies.get("locale")?.value;

    return NextResponse.rewrite(new URL(`/${locale}` + pathname, request.url));
  }

  if ((pathname === "/login" || pathname === "/signup") && !isAuthenticate) {
    console.log("Unauthenticated user accessing login/signup");
    return;
  }

  if (isAuthenticate && (pathname === "/login" || pathname === "/signup")) {
    console.log(
      "Authenticated user accessing login/signup. Redirecting to /en"
    );
    return NextResponse.rewrite(new URL("/en", request.url));
  }

  // Redirect unauthenticated users trying to access profile paths
  if (!isAuthenticate && pathname.startsWith("/profile")) {
    console.log("Unauthenticated user accessing profile. Redirecting to /en");
    return NextResponse.rewrite(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/profile"],
};
