"use client";

import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import bookingAnimation from "@/app/json/animations/booking.json";
import dealsAnimation from "@/app/json/animations/deals.json";
import saveAnimation from "@/app/json/animations/save.json";
import Lottie from "lottie-react";

const HowDoesItWork = () => {
  return (
    <div className="h-auto my-20">
      <Container>
        <div className="flex justify-center items-center">
          <h1 className=" text-3xl font-bold">
            How Does <span className="color-primary">eRequirement</span> Work?
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
                  <h1 className="text-2xl">1. Online Book Service</h1>
                  <h1 className="text-gray-500">
                    Find where you can find a particular service and compare
                    it's price across the available providers
                  </h1>
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
                  <h1 className="text-2xl">2. Find Out Best Prices</h1>
                  <h1 className="text-gray-500">
                    Create and save yout shopping list so you can browse where
                    you can purchase it by the cheapest price.
                  </h1>
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
                  <h1 className="text-2xl">3. Save Time & Money</h1>
                  <h1 className="text-gray-500">
                    Compare before you buy! Sign up totally free. Manage your
                    shopping with ease - no hidden fees.
                  </h1>
                </div>{" "}
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default HowDoesItWork;
