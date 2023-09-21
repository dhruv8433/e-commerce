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

// routes contain all necassary pages link
const Routes = ({ display, icons, padding, spacing }) => {
  const t = useTranslations("navigation");
  return (
    <div>
      {/* we dynamicly pass display padding and spacing for required devices */}
      <ul className={`${display} ${padding} ${spacing}`}>
        <li className="flex items-center">
          <Typography sx={{ display: icons, px: 1, py: 1 }}>
            <HomeOutlined />
          </Typography>
          <Link href={"/"} className="text-gray-600 hover:text-gray-800 ">
            {t("home")}
          </Link>
        </li>
        <li className="flex items-center">
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
        <li className="flex items-center">
          <Typography sx={{ display: icons, px: 1, py: 1 }}>
            <InfoOutlined />
          </Typography>
          <Link href={"/about"} className="text-gray-600 hover:text-gray-800">
            {t("about")}
          </Link>
        </li>
        <li className="flex items-center">
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
