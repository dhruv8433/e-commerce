"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import SettingDrawer from "./SettingDrawer";
import Image from "next/image";
import logo from "@/app/asset/logo.png";
import { Avatar, Box, IconButton } from "@mui/material";
import PhoneModal from "./phoneModal";
import BurgerMenu from "./BurgerMenu";
import Routes from "./routes";

// navigation for routing in different pages
const Navigation = () => {
  const t = useTranslations("navigation");
  const isLoggedIn = localStorage.getItem("login");
  return (
    <>
      {/* computer screen navigation  */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <nav className="fixed w-screen z-50 bg-opacity-70 backdrop-blur-md bg-gray-200 px-8">
          <div className="container mx-auto flex justify-between items-center">
            {/* Left Side Logo */}
            <Link href={"/"}>
              <Image
                src={logo} // Replace with your logo image URL
                alt="Logo"
                height={80}
                // className="h-10 w-20"
              />
            </Link>

            {/* Centered Links */}
            <Routes
              display={"flex"}
              icons={"none"}
              padding={"0"}
              spacing={"space-x-6"}
            />

            <div className="flex justify-center items-center">
              {/* Sign-up and Login Buttons */}
              {isLoggedIn === false ? (
                <div className="flex space-x-4 items-center">
                  <Link href={"/signup"}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full focus:ring focus:ring-blue-200">
                      {t("signup")}
                    </button>
                  </Link>
                  <Link href={"/login"}>
                    <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-full focus:ring focus:ring-gray-200">
                      {t("login")}
                    </button>
                  </Link>
                </div>
              ) : (
                <div>
                  <IconButton>
                    <Avatar style={{ width: 30, height: 30 }} />
                  </IconButton>
                </div>
              )}
              <SettingDrawer />
            </div>
          </div>
        </nav>
      </Box>

      {/* mobile screen navigation  */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <nav className="fixed w-screen z-50 bg-opacity-70 backdrop-blur-md bg-gray-200  px-2 h-16 flex">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <BurgerMenu />

              {/* Left Side Logo */}
              <Link href={"/"}>
                <Image
                  src={logo} // Replace with your logo image URL
                  alt="Logo"
                  height={80}
                  // className="h-10 w-20"
                />
              </Link>
            </div>

            {/* Sign-up and Login Buttons */}
            <div className="flex space-x-4 justify-center items-center">
              {isLoggedIn === false ? (
                <PhoneModal login={t("login")} signup={t("signup")} />
              ) : (
                <IconButton className="-mr-2">
                  <Avatar style={{ width: 30, height: 30 }} />
                </IconButton>
              )}
              <SettingDrawer />
            </div>
          </div>
        </nav>
      </Box>
    </>
  );
};

export default Navigation;
