"use client";

import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import aboutAnimation from "@/app/json/animations/about.json";
import { Box, Grid } from "@mui/material";
import { getSettings } from "@/app/services/getSetting";
import Breadcrumbs from "@/app/common/Breadcrumbs";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState("");

  async function getAbout() {
    try {
      const response = await getSettings();
      setAboutUs(response.about.about_us);
    } catch (error) {
      console.log("Error in getting settings", error);
    }
  }

  useEffect(() => {
    getAbout();
  }, []);
  return (
    <>
      {/* based on screen size */}
      <Box sx={{ pt: { xs: "4rem", md: "5rem" } }}>
        <Breadcrumbs title={"About us"} breadcrumb={"about"} />
      </Box>
      <Grid container>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="min-h-full flex justify-center items-center"
          >
            <Lottie animationData={aboutAnimation} style={{ height: 600 }} />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="min-h-full flex items-center justify-center bg-theme"
          >
            <section className="py-16">
              <div className="mx-auto flex justify-center flex-col items-center">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                  About eRequirement
                </h2>
                {/* we use dangerouslySetInnerHTML to set html inside dynamic div and pass __html to set data there*/}
                <div
                  className="px-10"
                  dangerouslySetInnerHTML={{ __html: aboutUs }}
                ></div>
              </div>
            </section>
          </motion.div>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
