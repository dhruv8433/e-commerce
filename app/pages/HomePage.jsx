import React from "react";
import HomeAnimation from "../components/homeAnimation";
import "@/app/styles/style.css";
import ProviderSection from "../components/ProviderSection";
import Tweets from "../components/Tweets";
import HowDoesItWork from "../components/HowDoesItWork";
import Discount from "../components/Discount";
import HomeCards from "../components/HomeCards";

const HomePage = () => {
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
