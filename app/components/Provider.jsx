"use client";

import { EastRounded, StarBorderOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Rating,
} from "@mui/material";
import waveAnimation from "@/app/json/animations/wave.json";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { BookmarkService } from "../services/bookmarkService";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

// reusable provider card
const Provider = ({ provider, bookmarkIconVisible }) => {
  const t = useTranslations("providers");
  const isAuthenticated = useSelector(
    (state) => state.isAuthenticate.isAuthenticated
  );
  let token;
  if (isAuthenticated) {
    token = useSelector((state) => state.isAuthenticate.user.token);
  }

  async function toogleBookmark(data) {
    const response = await BookmarkService(data, token);
    console.log(response);
    // Check if the bookmark was added or deleted
    if (response.message === "Bookmark added successfully") {
      toast.success("Added to bookmarks");
    } else if (response.message === "Bookmark deleted successfully") {
      toast.success("Removed from bookmarks");
    }
  }
  return (
    <div className="p-1 items-center text-center mt-10">
      {isAuthenticated ? (
        <Box
          className="absolute rounded-sm bg-white"
          sx={{
            ml: 41,
          }}
        >
          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            onClick={() => toogleBookmark(provider)}
          />
        </Box>
      ) : (
        ""
      )}

      <Link href={`/${provider.id}/${provider.slug}`}>
        <Card
          sx={{
            ":hover": {
              transition: "all 0.3s ease-in-out", // Add transition for all properties
              transform: "scale(1.05)", // Increase scale on hover
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)", // Add a shadow on hover
            },
          }}
        >
          <CardMedia
            image={provider.banner}
            alt="card banner"
            sx={{ height: 220, objectFit: "cover" }}
          />
          <div className="flex justify-center -mt-7">
            <div
              className="border border-purple-700 -mt-10"
              style={{
                borderRadius: 60,
                borderWidth: 7,
                height: 120,
                width: 120,
              }}
            >
              <img
                src={provider.logo}
                alt="card banner"
                className="border border-black "
                style={{
                  borderRadius: 60,
                  borderWidth: 5,
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <CardContent className="relative flex flex-col">
            {/* Position the Lottie animation in the top-left corner */}
            <div className="absolute top-4 left-0">
              <Lottie animationData={waveAnimation} />
            </div>
            <div className="info -mt-4 z-10 relative">
              <h1 className="text-2xl font-bold">{provider.title}</h1>
              <div className="flex items-center justify-center">
                <Rating value={provider.rating} readOnly />
              </div>
              <div className="flex p-1 justify-center">
                <h1 className="border bg-violet-500 px-2 py-1 rounded text-white">
                  {provider.order_completed} {t("order_completed")}
                </h1>
              </div>
              <div className="justify-end items-end text-end ml-auto border border-purple-700 hover:bg-violet-700 hover:text-white m-5 p-2 rounded-full w-min">
                <EastRounded sx={{ borderRadius: "50px" }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default Provider;
