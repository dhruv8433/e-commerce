import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ children, size, varient, customClass }) => {
  return (
    <Button
      size={`${size}`}
      className={`${customClass} bg-violet-400 hover:bg-violet-500`}
      variant={`${varient}`}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
