"use client";

import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import signupAnimation from "@/app/json/animations/signup.json";
import Lottie from "lottie-react";
import { userService } from "@/app/services/userService";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
    address: "",
  });

  const handleChange = (e) => {
    // destructuring to extract two properties from the e.target object name and their value we can check it by console.log(e)
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup Data:", signupData);
    try {
      const response = await userService(signupData);
      toast.success("user registration success");
      // const result = await response.save();
      setSignupData({
        email: "",
        password: "",
        phone: "",
        name: "",
        address: "",
      });
    } catch (error) {
      toast.error("unable to register user");
      console.log(error);
    }
  }

  const t = useTranslations("signup");
  return (
    <Box className="h-max items-center" sx={{ pt: { xs: "4rem", md: "5rem" } }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div className="flex justify-center items-center mt-3">
            <Lottie
              animationData={signupAnimation}
              style={{ height: 600 }}
              loop={false}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {t("signup")}
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
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium"
                  >
                    {t("phone")}
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium"
                  >
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                    placeholder="Enter your full name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-gray-700 font-medium"
                  >
                    {t("address")}
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                    placeholder="Enter your address"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full focus:ring focus:ring-blue-200"
                  >
                    {t("signup")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
