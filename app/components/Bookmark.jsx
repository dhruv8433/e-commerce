"use client";
import React, { useEffect, useState } from "react";
import { GetBookmarks } from "../services/getBookmarks";
import { useSelector } from "react-redux";
import ProviderHorizontal from "./ProviderHorizontal";

const Bookmark = () => {
  const [bookmark, setBookmark] = useState([]);
  const token = useSelector((state) => state.isAuthenticate.user.token);

  async function getUserBookmarks() {
    const response = await GetBookmarks(token);
    setBookmark(response);
  }

  useEffect(() => {
    getUserBookmarks();
  }, []);
  return (
    <div>
      <h1>Your Bookmarks</h1>
      <>
        {bookmark.map((bookData) => {
          console.log("data", bookData.data);
          return (
            <div>
              {bookData.data.map((singleBokmark) => {
                console.log(singleBokmark);
                return <ProviderHorizontal provider={singleBokmark} />;
              })}
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Bookmark;
