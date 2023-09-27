"use client";

import { Box, Container } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { homeService } from "../services/homeService";
import ProviderLogos from "./ProviderLogos";
import CustomButton from "../common/CustomButton";
import Link from "next/link";

const ProviderSection = () => {
  const [provider, setProvider] = useState([]);

  async function fetchingProvider() {
    const respnose = await homeService();
    setProvider(respnose.data.providers.data);
  }

  useEffect(() => {
    fetchingProvider();
  }, []);
  return (
    <div className="py-14 h-auto">
      <Container>
        <div className="flex justify-center ">
          <h1 className="text-3xl">Available Providers</h1>
        </div>

        {/* Provider Icons large  screen */}
        <Box
          className="icons justify-center w-full sm:hidden md:flex"
        >
          {/* to getting only 5 providers on home screen */}
          {provider.slice(0, 5).map((response) => (
            <ProviderLogos key={response.id} respnose={response} />
          ))}
        </Box>

        <div className="flex justify-center ">
          <Link href={"/providers"}>
            <CustomButton
              children={"view all providers"}
              varient={"contained"}
              customClass={"bg-violet-400 hover:bg-violet-500"}
              size={"large"}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ProviderSection;
