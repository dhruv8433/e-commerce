"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import { getHomeScreen } from "../httpFetch";
import "@/app/styles/style.css";

// swiper ads
export default function SwiperHome() {
  const [swiperSlide, setSwiperSlide] = useState([]);

  useEffect(() => {
    getHomeScreen().then((response) =>
      setSwiperSlide(response.data.slider.sliders)
    );
  }, []);

  return (
    <div className="overflow-hidden h-screen relative scroll-slides my-10">
      {/* Extra div for xs displays */}
      <div className="xs:block md:hidden absolute inset-0 flex justify-center items-center bg-gray-300">
        This is Extra Div
      </div>

      {/* swiper to use slideshow */}
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation={true}
        pagination={true}
        autoplay={true}
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        className="mySwiper h-full w-full"
      >
        {swiperSlide.map((slider) => (
          <SwiperSlide key={slider.id}>
            <img
              src={slider.image}
              alt="image swiper"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
