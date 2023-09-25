import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ children, size, varient, customClass }) => {
  return (
    <Button
      size={`${size}`}
      className={`${customClass}`}
      variant={`${varient}`}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
