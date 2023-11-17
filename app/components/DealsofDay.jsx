"use client";

import { Box, Container, Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { getHomeScreen } from "../httpFetch";
import Deal from "./Deal";
import Breadcrumb from "../common/Breadcrumbs";
import ProviderSkeleton, { ProviderHorizontalSkeleton } from "./Skeletons";

const DealsofDay = () => {
  const t = useTranslations("home_ads");

  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  async function setDealseOfDay() {
    const response = await getHomeScreen();
    setDeals(response.data.deals.data);
    setLoading(false);
  }

  useEffect(() => {
    setDealseOfDay();
  }, []);
  return (
    <div className="pt-20 h-50">
      <Breadcrumb breadcrumb={"Deals of Day"} title={"Deals"} />
      <Container>
        <div className="flex justify-between items-center">
          <Box>
            <Grid container spacing={2}>
              {loading ? (
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                      <ProviderHorizontalSkeleton myWidth={500} />
                    </Box>
                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                      <ProviderSkeleton />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                      <ProviderHorizontalSkeleton myWidth={500} />
                    </Box>
                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                      <ProviderSkeleton />
                    </Box>
                  </Grid>
                </Grid>
              ) : (
                deals.map((deal) => (
                  <Grid item xs={12} md={6} key={deal.id}>
                    {/* we use reusable component deal and pass deal as a props */}
                    <Deal deal={deal} />
                  </Grid>
                ))
              )}
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default DealsofDay;
