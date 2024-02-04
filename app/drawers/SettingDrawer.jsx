"use client";
import { SettingsOutlined } from "@mui/icons-material";
import { Box, Drawer, IconButton } from "@mui/material";

import { close, open } from "../config/config";
import { useState } from "react";
import Heading from "../components/Heading";
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";

// setting drawer that contain all nacessary settings for this website
const SettingDrawer = () => {
  const [openSetting, setOpenSetting] = useState(false);
  return (
    <div>
      <IconButton aria-label="setting" onClick={() => open(setOpenSetting)}>
        <SettingsOutlined />
      </IconButton>
      {/* drawer open when user click on setting icon */}
      <Drawer
        open={openSetting}
        anchor="right"
        onClose={() => setOpenSetting(false)}
      >
        <Box sx={{ width: { xs: "300px", md: "400px" } }}>
          {/* reusable heading component  */}
          <Heading title={"Settings"} setOpen={setOpenSetting} />
          {/* locale setting  */}
          <div className="p-4 mt-2">
            <h1>select preffered language : </h1>
            <div className="mt-2 border border-gray-400 rounded w-full flex justify-evenly items-center p-2 text-center">
              <Link href={"/en"} locale={"en"}>
                <p onClick={() => Cookies.set("locale", "en")}>English</p>
              </Link>{" "}
              |{" "}
              <Link href={"/hi"} locale={"hi"}>
                <p onClick={() => Cookies.set("locale", "hi")}>Hindi</p>
              </Link>{" "}
              |{" "}
              <Link href={"/fr"} locale={"fr"}>
                <p onClick={() => Cookies.set("locale", "fr")}>French</p>
              </Link>
            </div>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default SettingDrawer;
