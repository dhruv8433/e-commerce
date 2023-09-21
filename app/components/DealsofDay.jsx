"use client";

import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { getHomeScreen } from "../httpFetch";

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
      <div className="h-50 scroll-slides items-center pt-2 pb-2 advertisment">
        <div className="heading px-32">
          <h1 className="text-2xl font-bold items-center flex justify-center pt-2">
            {t("deals")}
          </h1>
          <hr />
        </div>

        <div className="flex justify-between items-center">
          <Grid container spacing={2}>
            {deals.map((deal) => {
              console.log(deal);
              return (
                <Grid item xs={12} md={6} key={deal.id}>
                  <div className="card">
                    <Card className="flex">
                      <CardMedia image={deal.image}></CardMedia>
                      <CardContent>
                        <h1>{deal.title}</h1>
                      </CardContent>
                    </Card>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default DealsofDay;
