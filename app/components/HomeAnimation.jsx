"use client";

import Lottie from "lottie-react";
import React from "react";
import homeAnimationJSON from "@/app/json/animations/homescreen.json";
import { useTranslations } from "next-intl";
import { Grid } from "@mui/material";


const HomeAnimation = () => {
  const t = useTranslations("home_ads");
  return (
    <div className="h-screen bg-bisque overflow-y-scroll scroll-slides">
      <Grid container>
        <Grid item xs={12} md={6}>
          <div>
            <Lottie animationData={homeAnimationJSON} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="flex justify-start items-center">
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              {t("welcome")}
            </h1>
            <p className="text-lg text-gray-600">{t("one_stop")}</p>
            <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full focus:ring focus:ring-blue-200">
              {t("get_start")}
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeAnimation;
