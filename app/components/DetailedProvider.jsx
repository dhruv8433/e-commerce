"use client";

import { Card, CardContent, CardMedia } from "@mui/material";
import { StarBorderOutlined } from "@mui/icons-material";
import waveAnimation from "@/app/json/animations/wave.json";
import Lottie from "lottie-react";
import React from "react";
import { useTranslations } from "next-intl";

const DetailedProvider = ({ provider }) => {
  const t = useTranslations("providers");
  return (
    <div className="p-1 items-center text-center">
      <Card>
        <CardMedia
          component={"img"}
          image={provider.banner}
          alt="card banner"
          sx={{ height: 300, objectFit: "cover" }}
        />
        <div className="flex justify-center">
          <CardMedia
            component={"img"}
            image={provider.logo} // Provide the URL of the logo image here
            alt="card banner"
            sx={{
              height: 120,
              width: 120,
              borderRadius: 50,
              mt: -8,
              border: "5px solid white",
            }}
          />
        </div>
        <CardContent className="text-center relative">
          {/* Position the Lottie animation in the top-left corner */}
          <div className="absolute -bottom-5 left-0">
            <Lottie animationData={waveAnimation} />
          </div>
          <div className="info -mt-4 z-10 relative">
            <h1 className="text-3xl font-bold my-2">{provider.title}</h1>
            <div className="flex justify-center">
              <p className="bg-blue-500 px-4 py-2 text-white w-max rounded">
                {provider.order_complted} {t("order_completed")}
              </p>
            </div>
            <div className="p-1 my-2">
              <p>{provider.description}</p>
            </div>

            <div className="address">
              <p>
                {t("address")}: <span className="font-bold">{provider.address}</span>
              </p>
            </div>

            <div className="flex justify-center items-center">
              <StarBorderOutlined />
              <h1>{provider.rating} / 5</h1>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailedProvider;
