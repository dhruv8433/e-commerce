"use client";
import { SettingsOutlined } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Drawer, IconButton } from "@mui/material";

import { close, open } from "../config/config";
import { useState } from "react";
import Heading from "./Heading";
import Link from "next/link";
import React from "react";
import { colors } from "../config/config";

const SettingDrawer = () => {
  const [openSetting, setOpenSetting] = useState(false);
  return (
    <div>
      <IconButton onClick={() => open(setOpenSetting)}>
        <SettingsOutlined />
      </IconButton>
      <Drawer
        open={openSetting}
        anchor="right"
        onClose={() => close(setOpenSetting)}
      >
        <Box sx={{ width: { xs: "300px", md: "400px" } }}>
          <Heading title={"Settings"} setOpen={setOpenSetting} />
          <div className="p-4 mt-2">
            <h1>select preffered language : </h1>
            <div className="mt-2 border border-gray-400 rounded w-full flex justify-evenly items-center p-2 text-center">
              <Link href={"/en"} locale={"en"}>
                English
              </Link>{" "}
              |{" "}
              <Link href={"/hi"} locale={"hi"}>
                Hindi
              </Link>{" "}
              |{" "}
              <Link href={"/fr"} locale={"fr"}>
                French
              </Link>
            </div>
          </div>
          <div className="p-4 mt-2">Select Theme:</div>
          {/* for multitheming  */}
          {/* <select>
            {colors.map((color) => (
              <option key={color} onChange={(e) => console.log(e.target.value)}>
                {color}
              </option>
            ))}
          </select> */}
          {/* under construction themeing  */}
          <div className="px-4">
            <ButtonGroup
              variant="outlined"
              fullWidth
              aria-label="text button group"
            >
              <Button>Light Mode</Button>
              <Button>Dark Mode</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default SettingDrawer;
