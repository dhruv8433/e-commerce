"use client";

import { Container } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  // to getting params 
  console.log(params);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="breadcrums"></div>
      <Container>
        <div className="flex justify-between">
          <div className="left">Services</div>
          <div className="right">Provider Info</div>
        </div>
      </Container>
    </div>
  );
};

export default page;
