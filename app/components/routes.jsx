"use client";

import {
  HomeOutlined,
  SettingsOutlined,
  InfoOutlined,
  ContactPageOutlined,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { close } from "../config/config";

// routes contain all necassary pages link
const Routes = ({ display, icons, padding, spacing, closeMenu }) => {
  const t = useTranslations("navigation");
  return (
    <div>
      {/* we dynamicly pass display padding and spacing for required devices */}
      <ul className={`${display} ${padding} ${spacing}`}>
        <li className="flex items-center" onClick={() => close(closeMenu)}>
          <Typography sx={{ display: icons, px: 1, py: 1 }}>
            <HomeOutlined />
          </Typography>
          <Link href={"/"} className="text-gray-600 hover:text-gray-800 ">
            {t("home")}
          </Link>
        </li>
        <li className="flex items-center" onClick={() => close(closeMenu)}>
          <Typography sx={{ display: icons, px: 1, py: 1 }}>
            <SettingsOutlined />
          </Typography>
          <Link
            href={"/providers"}
            className="text-gray-600 hover:text-gray-800"
          >
            {t("provider")}
          </Link>
        </li>
        <li className="flex items-center" onClick={() => close(closeMenu)}>
          <Typography sx={{ display: icons, px: 1, py: 1 }}>
            <InfoOutlined />
          </Typography>
          <Link href={"/about"} className="text-gray-600 hover:text-gray-800">
            {t("about")}
          </Link>
        </li>
        <li className="flex items-center" onClick={() => close(closeMenu)}>
          <Typography sx={{ display: icons, px: 1, py: 1 }}>
            <ContactPageOutlined />
          </Typography>
          <Link href={"/contact"} className="text-gray-600 hover:text-gray-800">
            {t("contact")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Routes;

export const ProfileRoutes = () => {
  // internationalization
  const t = useTranslations("profile");
  return (
    <div className="bg-white h-16 flex items-center px-2  ">
      <ul className="flex justify-between w-full overflow-y-auto px-2">
        <li className="mx-2">
          <Link href={"/profile/bookings"}>{t("booking")}</Link>
        </li>
        <li className="mx-2">
          <Link href={"/profile/bookmark"}>{t("bookmark")}</Link>
        </li>
        <li className="mx-2">
          <Link href={"/profile/notifications"}>{t("notification")}</Link>
        </li>
        <li className="mx-2">
          <Link href={"/profile/delete-account"}>{t("delete_account")}</Link>
        </li>
      </ul>
    </div>
  );
};
