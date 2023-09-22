"use client";

import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import aboutAnimation from "@/app/json/animations/about.json";
import { Grid } from "@mui/material";
import { getSettings } from "@/app/services/getSetting";

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
    <Grid container>
      <Grid item xs={12} md={6}>
        <div className="flex justify-center items-center mt-40">
          <Lottie animationData={aboutAnimation} style={{ height: 600 }} />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="min-h-screen flex items-center justify-center bg-theme">
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
        </div>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
