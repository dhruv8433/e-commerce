"use client";

import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Container, Divider } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="container mx-auto py-8 md:py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t("erequirement")}</h2>
            <p className="text-gray-300">{t("one_stop")}</p>
            <Divider className="my-4" />
            <h3 className="text-xl font-semibold mb-2">{t("follow")}</h3>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" aria-label="fb" className="text-white hover:text-blue-500">
                  <FacebookOutlined />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="insta" className="text-white hover:text-blue-500">
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="in" className="text-white hover:text-blue-500">
                  <LinkedIn />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="tweet" className="text-white hover:text-blue-500">
                  <Twitter />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("quick_links")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/providers" className="hover:text-blue-500">
                  {t("provider")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              {t("address")}: 1234 Home Street, City Name
            </p>
            <p className="text-gray-300">{t("phone")}: +123 456 7890</p>
            <p className="text-gray-300">{t("email")}: info@erequirement.com</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
