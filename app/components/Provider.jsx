"use client";

import {
  ArrowRightOutlined,
  EastRounded,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Card, CardContent, CardMedia } from "@mui/material";
import waveAnimation from "@/app/json/animations/wave.json";
import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";

// reusable provider card
const Provider = ({ provider }) => {
  return (
    <div className="p-1 items-center text-center">
      <Link href={`/${provider.id}/${provider.slug}`}>
        <Card>
          <CardMedia
            image={provider.banner}
            alt="card banner"
            sx={{ height: 250, objectFit: "cover" }}
          />
          <div className="flex justify-center">
            <CardMedia
              image={provider.logo}
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
            <div className="absolute top-0 left-0">
              <Lottie animationData={waveAnimation} />
            </div>
            <div className="info -mt-4 z-10 relative">
              <h1 className="text-2xl font-bold">{provider.title}</h1>
              <div className="flex justify-center p-1">
                <h1 className="border bg-violet-500 p-1 rounded text-white">
                  {provider.order_complted} order completed
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <StarBorderOutlined />
                <h1>{provider.rating} / 5</h1>
              </div>
              <div className="flex justify-center items-center mt-4 mb-2 p-2">
                <EastRounded
                  sx={{ border: "1px solid gray", borderRadius: "50px" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default Provider;
