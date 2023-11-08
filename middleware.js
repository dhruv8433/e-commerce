import createMiddleware from "next-intl/middleware";
import { isAuthenticated } from "./app/helper/AuthenticatedService";
import { NextResponse } from "next/server";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "hi", "fr"],
  defaultLocale: "sen",
});

// export async function middleware(request) {
//   if (!isAuthenticated) {
//     console.log("authenticated");
//     return;
//   }
//   console.log("unautho");
//   return NextResponse.redirect(new URL("/en/", request.url));
// }

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)", "/profile"],
};
