import { Facebook, Instagram, LinkedIn, Telegram, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const SocialMediaIcons = () => {
  return (
    <div>
      <div className="flex text-center justify-center items-center">
        <IconButton>
          <Instagram />
        </IconButton>
        <IconButton>
          <Facebook />
        </IconButton>
        <IconButton>
          <Twitter />
        </IconButton>
        <IconButton>
          <Telegram />
        </IconButton>
        <IconButton>
          <LinkedIn />
        </IconButton>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
