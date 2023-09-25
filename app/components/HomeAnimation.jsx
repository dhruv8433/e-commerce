"use client";

import Lottie from "lottie-react";
import React from "react";
import homeAnimationJSON from "@/app/json/animations/homescreen.json";
import { useTranslations } from "next-intl";
import { Grid } from "@mui/material";
import "@/app/styles/style.css";
import CustomButton from "../common/CustomButton";

// starting component
// use client because lottie only support in client component
const HomeAnimation = () => {
  const t = useTranslations("home_ads");
  return (
    <div className="h-screen overflow-y-scroll scroll-slides">
      <Grid container>
        <Grid item xs={12} md={6}>
          <div>
            {/* some animation for home screen */}
            <Lottie animationData={homeAnimationJSON} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="flex justify-start items-center">
          <div className="p-8 items-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              {t("welcome")}
            </h1>
            <p className="text-lg text-gray-600">{t("one_stop")}</p>
            {/* calling custom component of button */}
            <CustomButton
              children={t("get_start")}
              varient={"contained"}
              customClass={
                "mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full focus:ring focus:ring-blue-200"
              }
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeAnimation;
