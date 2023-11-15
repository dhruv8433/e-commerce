"use client";
import React, { useEffect, useState } from "react";
import { GetBookmarks } from "../services/getBookmarks";
import { useSelector } from "react-redux";
import ProviderHorizontal from "./ProviderHorizontal";
import { ProviderHorizontalSkeleton } from "./Skeletons";
import bookmarkAnimation from "@/app/json/animations/bookmark.json";
import Lottie from "lottie-react";
import { Button } from "@mui/material";
import Link from "next/link";
import ProfilePageName from "./ProfilePageName";

const Bookmark = () => {
  const [bookmark, setBookmark] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.isAuthenticate.user.token);

  async function getUserBookmarks() {
    const response = await GetBookmarks(token);
    setBookmark(response);
    setLoading(false);
  }

  useEffect(() => {
    getUserBookmarks();
  }, []);
  return (
    <div>
      <ProfilePageName name={"Bookmarks"} />
      <>
        {loading ? (
          <>
            <ProviderHorizontalSkeleton />
            <ProviderHorizontalSkeleton />
            <ProviderHorizontalSkeleton />
          </>
        ) : bookmark.length > 0 ? (
          bookmark.map((bookData) => {
            return (
              <>
                {bookData.data.map((singleBokmark) => {
                  console.log(singleBokmark);
                  return <ProviderHorizontal provider={singleBokmark} />;
                })}
              </>
            );
          })
        ) : (
          <div className="flex flex-col justify-center items-center h-[466px]">
            <Lottie
              animationData={bookmarkAnimation}
              style={{ height: "200px" }}
            />
            <h1 className="text-2xl font-semibold">No Bookmarks!!</h1>
            <h1 className="mb-4">
              Explore our providers and add them to your bookmarks!
            </h1>
            <Link href={"/providers"}>
              <Button
                variant="outlined"
                size="small"
                className="text-violet-500"
              >
                Explore
              </Button>
            </Link>
          </div>
        )}
      </>
    </div>
  );
};

export default Bookmark;
