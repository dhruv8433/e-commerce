"use client";

import { EastRounded, StarBorderOutlined } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Checkbox } from "@mui/material";
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
  const token = useSelector((state) => state.isAuthenticate.user.token);

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
    <div className="p-1 items-center text-center">
      {bookmarkIconVisible ? (
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
                borderRadius: 2,
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
                  {provider.order_complted}
                  {""}
                  {t("order_completed")}
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
