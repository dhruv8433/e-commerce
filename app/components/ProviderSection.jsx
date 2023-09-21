"use client";

import React, { useEffect, useState } from "react";
import "@/app/styles/style.css";
import { homeService } from "../services/homeService";
import { Box, Grid } from "@mui/material";
import Provider from "./Provider";
import { useTranslations } from "next-intl";
import { getHomeScreen } from "../httpFetch";

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
      <div className="heading px-8">
        <h1 className="text-2xl font-bold items-center flex justify-center pt-2">
          {t("top_provider")}
        </h1>
        <hr />
      </div>
      <div>
        <Box className="">
          <div className="providercard p-6">
            <Grid container>
              {providers.slice(0, 3).map((provider) => (
                <Grid item xs={12} sm={6} md={4} key={provider.id}>
                  <Provider key={provider.id} provider={provider} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default ProviderSection;
