import "../globals.css";
// for using multi language in our project
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Toaster } from "react-hot-toast";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import { ProviderStore } from "./StoreProvider";
import { setLocale } from "../config/config";
// web analytics and speed Insights
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
require("dotenv").config();

// static params for our languages file
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "hi" }, { locale: "de" }];
}

export default async function RootLayout({ children, params }) {
  let messages;
  const { locale } = params;
  // when user want to change localets
  try {
    // if
    setLocale();
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    // passing locale as lang in html so we can translate in defined json language file
    <html lang={"en"}>
      <head>
        {/* if web don't have fav icon */}
        <link rel="shortcut icon" href="#" />
      </head>
      <body>
        {/* internationalization */}
        <NextIntlClientProvider
          defaultTranslationValues={"en"}
          locale={locale}
          messages={messages}
        >
          {/* redux provider */}
          <ProviderStore>
            <Navigation />
            {children}
            <SpeedInsights />
            <Analytics />
            <Footer />
            <Toaster />
          </ProviderStore>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
