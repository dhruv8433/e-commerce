"use client";

import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import signupAnimation from "@/app/json/animations/signup.json";
import Lottie from "lottie-react";
import { userService } from "@/app/services/userService";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import SignUpForm from "@/app/components/SignUpForm";

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
          <SignUpForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            t={t}
            isItSignup={true}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
