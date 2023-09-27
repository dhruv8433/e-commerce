import { Container } from "@mui/material";
import React from "react";

const Discount = () => {
  return (
    <div className="dicount-bg h-96">
      <Container>
        <div className="absolute text-white">
          <h1 className="text-3xl font-bold mt-20">
            Where Do You Get Service?
          </h1>
          <div className="w-300">
            <h1 className="mt-2 text-2xl">
              Register and send your shopping recipts to{" "}
              <span className="font-bold">erequirement@gmail.com</span> to get a
              discount at your preferred provider
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Discount;
