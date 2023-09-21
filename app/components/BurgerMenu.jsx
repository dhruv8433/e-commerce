"use client";

import React, { useState } from "react";
import { Box, Divider, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { close, open } from "../config/config";
import logo from "@/app/asset/logo.png";
import Image from "next/image";
import Routes from "./routes";

const BurgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <IconButton onClick={() => open(setOpenMenu)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={openMenu} onClose={() => close(setOpenMenu)}>
        <Box sx={{ width: 300 }} display={"flex"} alignItems={"center"}>
          {/* Left Side Logo */}
          <Image src={logo} alt="Logo" height={80} />
          <h1 className="text-2xl font-bold">eRequirement</h1>
        </Box>
        <Divider />
        {/* routing links  */}
        <div className="my-4">
          <Routes
            display={"block"}
            icons={"flex"}
            padding={"px-6"}
            spacing={"0"}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;
