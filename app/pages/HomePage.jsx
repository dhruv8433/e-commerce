"use client"

import React, { useEffect } from "react";
import HomeAnimation from "../components/HomeAnimation";
import "@/app/styles/style.css";
import ProviderSection from "../components/ProviderSection";
import Tweets from "../components/Tweets";
import HowDoesItWork from "../components/HowDoesItWork";
import Discount from "../components/Discount";
import HomeCards from "../components/HomeCards";
import { setLocale } from "../config/config";

const HomePage = () => {
  useEffect(() => {
    setLocale();
  }, []);
  return (
    <>
      <HomeAnimation />
      <HomeCards />
      <HowDoesItWork />
      <Discount />
      <ProviderSection />
      {/* <DealsofDay /> */}
      {/* <SwiperHome /> */}
      <Tweets />
    </>
  );
};

export default HomePage;
