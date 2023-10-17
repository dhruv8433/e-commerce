/**
 * This is reusable button that everywhere used in our project
 */

import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  children,
  size,
  varient,
  customClass,
  customFunction,
}) => {
  return (
    <Button
      size={`${size}`}
      className={`${customClass} bg-violet-400 hover:bg-violet-500`}
      variant={`${varient}`}
      onClick={customFunction}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
