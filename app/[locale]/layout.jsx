import "../globals.css";
import { Inter } from "next/font/google";
// for using multi language in our project
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { company_name } from "../config/config";
import { Toaster } from "react-hot-toast";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import { ProviderStore } from "./StoreProvider";
import Theme from "../colors/theme";
require("dotenv").config();

export const metadata = {
  title: `Home | ${company_name}`,
};

// static params for our languages file
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "hi" }, { locale: "de" }];
}

export default async function RootLayout({ children, params }) {
  let messages;
  const { locale } = params;
  // when user want to change localets
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    // passing locale as lang in html so we can translate in defined json language file
    <html lang={locale}>
      <head>
        {/* if web don't have fav icon */}
        <link rel="shortcut icon" href="#" />
      </head>
      <body>
        {/* internationalization */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* redux provider */}
          <ProviderStore>
            <Theme>
              <Navigation />
              {children}
              <Footer />
              <Toaster />
            </Theme>
          </ProviderStore>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
