"use client";

import React, { useEffect, useState } from "react";
import { homeService } from "../services/homeService";
import Tweet from "./Tweet";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";

// twitter section
const Tweets = () => {
  const [twitte, setTwitte] = useState([]);

  async function getTweets() {
    const response = await homeService();
    setTwitte(response.data.tweets.data);
  }

  useEffect(() => {
    getTweets();
  }, []);

  const t = useTranslations("reviews");
  return (
    <div className="twitter h-auto">
      <div className="heading flex justify-center py-1">
        <h1 className="text-2xl font-bold">{t("customer_review")}</h1>
      </div>
      <hr className="pb-2 pt-3" />
      <div className="flex justify-center overflow-hidden">
        <div className="md:w-1/2 sm:w-96">
          {/* swiper to show slides using different effects */}
          <Swiper
            effect={"coverflow"}
            // grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            <>
              {twitte.map((twitter) => (
                <SwiperSlide style={{ width: "300px" }} key={twitter.id}>
                  {/* reusable tweet componet and here we pass single twitter for all tweet */}
                  <Tweet twitter={twitter} />
                </SwiperSlide>
              ))}
            </>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
