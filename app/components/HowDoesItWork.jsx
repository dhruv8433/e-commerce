"use client";

import { Box, Container, Grid } from "@mui/material";
import React from "react";
import bookingAnimation from "@/app/json/animations/booking.json";
import dealsAnimation from "@/app/json/animations/deals.json";
import saveAnimation from "@/app/json/animations/save.json";
import Lottie from "lottie-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const HowDoesItWork = () => {
  const t = useTranslations("work");
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-auto my-20"
    >
      <Container>
        <div className="flex justify-center items-center">
          <h1 className=" text-3xl font-bold">
            {t("how")}
            <span className="color-primary text-4xl">{t("company")}</span>{" "}
            {t("work")}?
          </h1>
        </div>
        <Grid container spacing={3}>
          <Box
            className="text-center"
            sx={{
              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <div className="w-300">
                <Lottie
                  animationData={bookingAnimation}
                  style={{
                    height: 300,
                    width: "inherit",
                    objectFit: "cover",
                  }}
                />
                <div className="content">
                  <h1 className="text-2xl font-semibold">
                    I. {t("online_book")}
                  </h1>
                  <h1 className="text-gray-500">{t("step_1")}</h1>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <div className="w-300">
                <Lottie
                  animationData={dealsAnimation}
                  style={{
                    height: 300,
                    width: "inherit",
                    objectFit: "cover",
                  }}
                />
                <div className="content">
                  <h1 className="text-2xl font-semibold">
                    II. {t("best_price")}
                  </h1>
                  <h1 className="text-gray-500">{t("step_2")}</h1>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box className="w-300" sx={{ ml: { xs: "", md: "60px" } }}>
                <Lottie
                  animationData={saveAnimation}
                  style={{
                    height: 200,
                    width: "inherit",
                    objectFit: "cover",
                    marginBlock: "50px",
                  }}
                />
                <div className="content">
                  <h1 className="text-2xl font-semibold">
                    III. {t("save_time")}
                  </h1>
                  <h1 className="text-gray-500">{t("step_3")}</h1>
                </div>{" "}
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default HowDoesItWork;
