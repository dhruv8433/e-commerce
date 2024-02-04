// have to ser default language eg

import Cookies from "js-cookie";
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { setLocale } from "./app/config/config";

export default createMiddleware({
  locales: ["en", "hi", "fr"],
  defaultLocale: "en",
});

const url = "https://e-requirement.vercel.app/";
// const url = "http://localhost:8000";

export async function middleware(request) {
  const isAuthenticate = request.cookies.get("authenticated")?.value === "true";
  const { pathname } = request.nextUrl;

  // if there is no locale set inside cookies, than we set again with en
  setLocale();

  const locale = request.cookies.get("locale")?.value;

  console.log("Path:", pathname);
  console.log("Authenticated:", isAuthenticate);

  if (pathname == "/" || pathname == "/") {
    if (locale) {
      return NextResponse.rewrite(new URL(`/${locale}`, request.url));
    }
    return NextResponse.rewrite(new URL("/en", request.url));
  }

  // Redirect unauthenticated users trying to access profile paths
  if (
    !isAuthenticate &&
    (pathname.startsWith("/profile") ||
      pathname.startsWith(`/${locale}/profile`))
  ) {
    console.log("Unauthenticated user accessing profile. Redirecting to /");
    return NextResponse.redirect(new URL(`${url}/${locale}`, request.url));
  }

  if (
    (pathname === `${locale}/login` ||
      pathname === `${locale}/signup` ||
      pathname === "/login" ||
      pathname === "/signup") &&
    !isAuthenticate
  ) {
    console.log("Unauthenticated user accessing login/signup");
    return NextResponse.redirect(`${url}/${locale}` + pathname, request.url);
  }

  if (
    isAuthenticate &&
    (pathname === `/${locale}/login` ||
      pathname === `/${locale}/signup` ||
      pathname === "/login" ||
      pathname === "/signup")
  ) {
    console.log("Authenticated user accessing login/signup. Redirecting to /");
    return NextResponse.redirect(new URL(`${url}/${locale}`, request.url));
  }

  if (
    !pathname.startsWith("/en") &&
    !pathname.startsWith("/hi") &&
    !pathname.startsWith("/fr")
  ) {
    return NextResponse.redirect(
      new URL(`${url}/${locale}` + pathname, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/profile"],
};
