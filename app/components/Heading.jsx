import { CloseRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { close } from "../config/config";

// reusable heading component for drawer or modal section
const Heading = ({ title, setOpen }) => {
  return (
    <>
      <div className="p-2 flex justify-between">
        <h1 className="text-2xl">{title}</h1>
        <IconButton onClick={() => close(setOpen)}>
          <CloseRounded />
        </IconButton>
      </div>
      <hr />
    </>
  );
};

export default Heading;
