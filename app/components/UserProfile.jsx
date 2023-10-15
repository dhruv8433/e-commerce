"use client";

import React from "react";
import CustomButton from "../common/CustomButton";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_SUCCESS } from "../reducer/isLoggedIn";
import toast from "react-hot-toast";
import { Button, Grid } from "@mui/material";
import { useTranslations } from "next-intl";

const UserProfile = ({ content }) => {
  // dispatch for using redux
  const dispatch = useDispatch();

  // redux logout function
  function logout() {
    dispatch({ type: LOGOUT_SUCCESS });
    toast.success("Logout Success");
    if (typeof window !== "undefined") {
      window.location.assign("/");
    }
    console.log("Logout fire");
  }

  // to get user details
  const user = useSelector((state) => state.isAuthenticate.user);

  // internationalization
  const t = useTranslations("profile");

  return (
    <div className="pt-28 w-full pb-8 text-center">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className="border border-red-300 bg-theme rounded justify-center">
            <div>
              <div className="user-image h-56 w-56 mx-auto text-center">
                <Image
                  src={
                    "https://i.pinimg.com/736x/95/14/a2/9514a2106bdf506dc2ed2047ae4ba908.jpg"
                  }
                  width={"200"}
                  height={"200"}
                  alt="user-picture"
                  style={{
                    borderRadius: "120px",
                    maxHeight: "100%",
                    width: "100%",
                  }}
                />
              </div>
              <div className="user-details text-center items-center">
                <div className="block">
                  <h1 className="text-3xl font-bold">{user.user}</h1>
                  <h1 className="text-2xl font-bold">{user.email}</h1>
                  <h1 className="text-2xl font-semibold">{user.mobile}</h1>
                </div>
              </div>
              <div className="edit ml-auto m-1">
                <CustomButton
                  children={"Edit"}
                  varient={"outlined"}
                  size={"small"}
                  customClass={"text-white"}
                />
              </div>
            </div>

            <Button varient={"contained"} onClick={() => logout()}>
              Logout
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="border border-red-300 rounded">
            {/* user navigation links that contain common user profile but different user route */}
            <div className="bg-white h-10 flex items-center">
              <ul className="flex justify-around w-full">
                <li>
                  <Link href={"/profile/bookings"}>{t("booking")}</Link>
                </li>
                <li>
                  <Link href={"/profile/bookmark"}>{t("bookmark")}</Link>
                </li>
                <li>
                  <Link href={"/profile/notifications"}>
                    {t("notification")}
                  </Link>
                </li>
                <li>
                  <Link href={"/profile/delete-account"}>
                    {t("delete_account")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="content">{content}</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
