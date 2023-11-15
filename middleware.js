import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { store } from "./app/[locale]/store";

export default createMiddleware({
  locales: ["en", "hi", "fr"],
  defaultLocale: "sen"
});

// let isRedirected = false;
// export async function middleware(request) {
//   // Access the Redux store state
//   const isAuthenticate = store.getState().isAuthenticate.isAuthenticated;

//   if (!isAuthenticate && !isRedirected) {
//     console.log("User is not authenticated. Redirecting...");
//     isRedirected = true;
//     const redirectUrl = `/en/`;

//     // Set status and headers for redirection
//     return NextResponse.rewrite(new URL(redirectUrl, request.url))
//   }

//   // If the user is authenticated or has already been redirected, continue with the next middleware
//   return;
// }

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/profile"],
};
