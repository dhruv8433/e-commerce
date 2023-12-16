"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect } from "react";
import SettingDrawer from "../drawers/SettingDrawer";
import Image from "next/image";
import logo from "@/app/asset/logo.png";
import { Avatar, Box, Container, IconButton } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import BurgerMenu from "./BurgerMenu";
import Routes from "./routes";
import { useSelector } from "react-redux";
import CartDrawer from "../drawers/CartDrawer";
import Cookies from "js-cookie";

// navigation for routing in different pages
const Navigation = () => {
  const t = useTranslations("navigation");
  // for checking user is logged in or not
  let isLoggedIn = useSelector((state) => state.isAuthenticate.isAuthenticated);
  const cookieChangesd = Cookies.get("authenticated");
  console.log(isLoggedIn);
  console.log("cookie", cookieChangesd);
  return (
    <>
      {/* computer screen navigation  */}
      <Box
        className="bg-gray-100 w-screen bg-opacity-70 backdrop-blur-md fixed z-40"
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Container>
          <nav>
            <div className="container flex justify-between items-center">
              {/* Left Side Logo */}
              <Link href={"/"}>
                <Image
                  src={logo}
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
                {isLoggedIn === false || cookieChangesd == undefined ? (
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
                      <Link href={"/profile"}>
                        <Avatar style={{ width: 30, height: 30 }} />
                      </Link>
                    </IconButton>
                    <CartDrawer />
                  </div>
                )}
                <SettingDrawer />
              </div>
            </div>
          </nav>
        </Container>
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
                  src={logo}
                  alt="Logo"
                  height={80}
                  // className="h-10 w-20"
                />
              </Link>
            </div>

            {/* Sign-up and Login Buttons */}
            <div className="flex justify-center items-center">
              {isLoggedIn === false ? (
                <Link href={"/signup"}>
                  <IconButton>
                    <LoginIcon />
                  </IconButton>
                </Link>
              ) : (
                <div>
                  <IconButton>
                    <Link href={"/profile"}>
                      <Avatar style={{ width: 30, height: 30 }} />
                    </Link>
                  </IconButton>
                  <CartDrawer />
                </div>
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
