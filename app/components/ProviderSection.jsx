"use client";

import { Box, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { homeService } from "../services/homeService";
import ProviderLogos from "./ProviderLogos";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ProviderSection = () => {
  const [provider, setProvider] = useState([]);

  async function fetchingProvider() {
    const respnose = await homeService();
    setProvider(respnose.data.providers.data);
  }

  useEffect(() => {
    fetchingProvider();
  }, []);

  const t = useTranslations("providers");
  return (
    <div
      data-aos="fade-up"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-14 h-auto"
    >
      <Container>
        <div data-aos="fade-up" className="flex justify-center ">
          <h1 data-aos="fade-up" className="text-3xl">
            {t("available")}
          </h1>
        </div>

        {/* Provider Icons large  screen */}
        <Box className="icons justify-center w-full sm:hidden md:flex">
          {/* to getting only 5 providers on home screen */}
          {provider.slice(0, 5).map((response) => (
            <ProviderLogos key={response.id} respnose={response} />
          ))}
        </Box>

        <div className="flex justify-center ">
          <Link href={"/providers"}>
            <Button
              data-aos="fade-up"
              variant="outlined"
              className="text-black hover:bg-violet-500 border hover:border-violet-950"
              sx={{
                background: "none",
                color: "black",
                border: "1px solid",
                "&:hover": {
                  background: "#cc36ee",
                  color: "white",
                },
              }}
            >
              {t("all_provider")}
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ProviderSection;
