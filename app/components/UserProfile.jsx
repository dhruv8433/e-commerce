"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_SUCCESS } from "../reducer/isLoggedIn";
import toast from "react-hot-toast";
import { Grid } from "@mui/material";
import { ProfileRoutes } from "./routes";
import ProfileLeft from "./ProfileLeft";
import profileAnimation from "@/app/json/animations/profile.json";
import Lottie from "lottie-react";
import Cookies from "js-cookie";

const UserProfile = ({ profilePage, data, changeRoute }) => {
  // dispatch for using redux
  const dispatch = useDispatch();

  // redux logout function
  function logout() {
    dispatch({ type: LOGOUT_SUCCESS });
    toast.success("Logout Success");
    Cookies.set("authenticated", false);
    if (typeof window !== "undefined") {
      window.location.assign("/");
    }
    console.log("Logout fire");
  }

  // to get user details
  const user = useSelector((state) => state.isAuthenticate.user);

  return (
    <div className="pt-28 w-full pb-8 text-center">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <ProfileLeft user={user} logout={logout} />
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="border border-red-300 rounded">
            {/* user navigation links that contain common user profile but different user route */}
            <ProfileRoutes />
          </div>
          <div className="content border border-red-300 rounded  my-6">
            {!changeRoute && (
              <Lottie
                animationData={profileAnimation}
                style={{ height: 500 }}
              />
            )}
            <div>{data}</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
