"use client";

import { Box, Container, Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { getHomeScreen } from "../httpFetch";
import discountAnimation from "@/app/json/animations/discount.json";
import Deal from "./Deal";
import Lottie from "lottie-react";

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
    <div className="md:h-50 sm:h-max scroll-slides items-center pt-2 pb-2 advertisment">
      <Container>
        {/* heading that contian deals of the day */}
        <div className="heading">
          <h1 className="text-2xl font-bold items-center flex justify-start pt-2">
            {t("deals")}
          </h1>
          <hr />
        </div>

        <div className="flex justify-between items-center">
          <Box>
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
      </Container>
    </div>
  );
};

export default DealsofDay;
