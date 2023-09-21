"use client";

import { Box, Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { getHomeScreen } from "../httpFetch";
import Deal from "./Deal";

const DealsofDay = () => {
  const t = useTranslations("home_ads");

  const [deals, setDeals] = useState([]);

  async function setDealseOfDay() {
    const response = await getHomeScreen();
    setDeals(response.data.deals.data);
  }

  useEffect(() => {
    setDealseOfDay();
  }, []);
  return (
    <>
      <div className="md:h-50 sm:h-max scroll-slides items-center pt-2 pb-2 advertisment">
        {/* heading that contian deals of the day */}
        <div className="heading px-32">
          <h1 className="text-2xl font-bold items-center flex justify-center pt-2">
            {t("deals")}
          </h1>
          <hr />
        </div>

        <div className="flex justify-between items-center">
          <Box sx={{ px: { xs: "40px", lg: "120px" } }}>
            <Grid container spacing={2}>
              {deals.map((deal) => (
                <Grid item xs={12} md={6} key={deal.id}>
                  {/* we use reusable component deal and pass deal as a props */}
                  <Deal deal={deal} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default DealsofDay;
