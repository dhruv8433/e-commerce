import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const headersOption = () => {
  const res = NextResponse.next();
  // add the CORS headers to the response
  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append("Access-Control-Allow-Origin", "*"); // replace this your actual origin
  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
};

export default createMiddleware(
  {
    // A list of all locales that are supported
    locales: ["en", "hi", "fr"],

    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: "en",
  },
  headersOption
);

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)", "/profile"],
};
