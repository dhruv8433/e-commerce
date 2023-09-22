import React from "react";
import SwiperHome from "../components/SwiperHome";
import HomeAnimation from "../components/homeAnimation";
import "@/app/styles/style.css";
import ProviderSection from "../components/ProviderSection";
import Twittes from "../components/Twittes";
import DealsofDay from "../components/DealsofDay";

const HomePage = () => {
  return (
    <>
      <div className="scroll-container">
        <HomeAnimation />
        <ProviderSection />
        <DealsofDay />
        <SwiperHome />
        <Twittes />
      </div>
    </>
  );
};

export default HomePage;
