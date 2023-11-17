"use client";
import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../common/Breadcrumbs";
import { homeService } from "../services/homeService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSkeleton } from "./Skeletons";

const ShowCase = () => {
  const [showcase, setShowcase] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getShowCase() {
    const response = await homeService();
    console.log(response.data.slider.sliders);
    setShowcase(response.data.slider.sliders);
    setLoading(false);
  }

  useEffect(() => {
    getShowCase();
  }, []);
  return (
    <div className="pt-20">
      <Breadcrumb breadcrumb={"ShowCase"} title={"showcase"} />
      <Container>
        <Box className="" sx={{ display: { xs: "none", md: "block" } }}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            style={{
              height: 500,
              display: "flex",
              borderRadius: "10px",
              marginBlock: "20px",
            }}
          >
            {loading ? (
              <SwiperSkeleton width={1200} height={800} />
            ) : (
              showcase.map((show) => (
                <div key={show.id}>
                  <SwiperSlide>
                    <img
                      src={show.image}
                      alt=""
                      width={"100%"}
                      height={"auto"}
                    />
                  </SwiperSlide>
                </div>
              ))
            )}
          </Swiper>
        </Box>
        <Box className="" sx={{ display: { xs: "block", md: "none" } }}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            style={{
              height: 300,
              display: "flex",
              borderRadius: "10px",
              marginBlock: 10,
              marginBottom: 20,
            }}
          >
            {loading ? (
              <SwiperSkeleton width={400} height={800} />
            ) : (
              showcase.map((show) => (
                <div key={show.id}>
                  <SwiperSlide>
                    <img
                      src={show.image}
                      alt=""
                      width={"100%"}
                      height={"auto"}
                    />
                  </SwiperSlide>
                </div>
              ))
            )}
          </Swiper>
        </Box>
      </Container>
    </div>
  );
};

export default ShowCase;
