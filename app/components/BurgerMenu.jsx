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
      {/* burger menu icon */}
      <IconButton onClick={() => open(setOpenMenu)}>
        <MenuIcon />
      </IconButton>
      {/* creating drawer to routing in responsive screen */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box sx={{ width: 300, my: 1, mx: 1 }} display={"flex"} alignItems={"center"}>
          {/* Left Side Logo */}
          <Image src={logo} alt="Logo" height={40} />
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
            closeMenu={setOpenMenu}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;
