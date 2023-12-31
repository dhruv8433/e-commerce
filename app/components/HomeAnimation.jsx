"use client";

import Lottie from "lottie-react";
import React from "react";
import homeAnimationJSON from "@/app/json/animations/homescreen.json";
import { useTranslations } from "next-intl";
import { Container, Grid } from "@mui/material";
import "@/app/styles/style.css";

// starting component
// use client because lottie only support in client component
const HomeAnimation = () => {
  const t = useTranslations("home_ads");
  return (
    <>
      <div className="h-full">
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <div>
                {/* some animation for home screen */}
                <Lottie animationData={homeAnimationJSON} />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              className="flex justify-start items-center"
            >
              <div className="p-8 items-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">
                  {t("welcome")}
                </h1>
                <p className="text-lg text-gray-600">{t("one_stop")}</p>
                <p className="text-sm text-gray-400">{t("explore_here")}</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default HomeAnimation;
