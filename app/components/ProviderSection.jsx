"use client";

import React, { useEffect, useState } from "react";
import "@/app/styles/style.css";
import { Box, Grid } from "@mui/material";
import Provider from "./Provider";
import { useTranslations } from "next-intl";
import { getHomeScreen } from "../httpFetch";
import Link from "next/link";

// provider section that used in home screen
const ProviderSection = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    //calling api here
    getHomeScreen().then((response) => {
      setProviders(response.data.providers.data);
    });
  }, []);

  const t = useTranslations("home_ads");
  return (
    <Box
      className="providerSection scroll-slides items-center pt-2 pb-2"
      sx={{
        height: "max-content",
        paddingInline: { xs: "none", md: "100px" },
      }}
    >
      {/* heading component that contain top rated providers and view all providers  */}
      <div className="px-8">
        <div className="heading flex justify-between items-center ">
          <h1 className="text-2xl font-bold items-center  pt-2">
            {t("top_provider")}
          </h1>
          <Link href={"/providers"}>View All providers</Link>
        </div>
        <hr />
      </div>
      {/* provider cards */}
      <div>
        <Box className="mt-4 mb-4">
          <div className="providercard">
            <Box sx={{ px: { xs: 1, lg: 4 } }}>
              <Grid container>
                {/* we only display 3 providers on home page */}
                {providers.slice(0, 3).map((provider) => (
                  <Grid item xs={12} sm={6} md={4} key={provider.id}>
                    {/* calling single provider component */}
                    <Provider key={provider.id} provider={provider} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default ProviderSection;
