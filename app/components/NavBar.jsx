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

const Navigation = () => {
  const t = useTranslations("navigation");
  const isLoggedIn = localStorage.getItem("login");
  return (
    <>
      {/* computer screen navigation  */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <nav className="fixed w-screen z-50 bg-opacity-70 backdrop-blur-md bg-gray-200  px-8">
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

/**
 * import React, { useState } from "react";


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full focus:ring focus:ring-blue-200"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

 */
