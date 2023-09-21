"use client";

import React, { useState } from "react";
import { Grid } from "@mui/material";
import Lottie from "lottie-react";
import Link from "next/link";
import { verifyUser } from "@/app/services/verifyUser";
import toast from "react-hot-toast";

import loginAnimation from "@/app/json/animations/login.json";
import { useTranslations } from "next-intl";
// import { loginSuccess } from "./LoginSuccess";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login Data:", loginData);
    try {
      const user = await verifyUser(loginData);
      console.log("success");
      console.log(user);
      localStorage.setItem("token", user.token);
      localStorage.setItem("login", true);
      toast.success("Login Success");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const t = useTranslations("login");
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div className="flex justify-center items-center mt-40">
            <Lottie animationData={loginAnimation} style={{ height: 600 }} />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {t("login")}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium"
                  >
                    {t("email")}
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
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-medium"
                  >
                    {t("password")}
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
                    {t("login")}
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p className="text-gray-600">{t("no_account")}</p>
                <Link href="/signup" className="text-blue-500 hover:underline">
                  {t("signup")}
                </Link>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
