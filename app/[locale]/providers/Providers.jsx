"use client";
import Breadcrumb from "@/app/common/Breadcrumbs";
import Provider from "@/app/components/Provider";
import ProviderSkeleton from "@/app/components/Skeletons";
import { GetProviders } from "@/app/services/getProviders";
import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

const Providers = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  async function ProviderPage() {
    try {
      const response = await GetProviders();
      console.log(response);
      setProviders(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error in Getting Providers: ", error);
    }
  }

  useEffect(() => {
    ProviderPage();
    console.log(loading);
  }, []);
  return (
    <>
      <Box sx={{ pt: { xs: "4rem", md: "5rem" } }}>
        <Breadcrumb title={"Providers"} breadcrumb={"providers"} />
      </Box>
      <Container>
        <Box className="py-2">
          {loading ? (
            <Grid container>
              <MultiSkeleton />
            </Grid>
          ) : (
            <div className="providercard">
              <Box>
                <Grid container spacing={2}>
                  {/* we only display 3 providers on home page */}
                  {providers.map((provider) => (
                    <Grid item xs={12} sm={6} md={4} key={provider.id}>
                      {/* calling single provider component */}
                      <Provider key={provider.id} provider={provider} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Providers;

const MultiSkeleton = () => {
  return (
    <>
      <Grid item xs={12} sm={8} md={4}>
        <ProviderSkeleton />
      </Grid>
      <Grid item xs={12} sm={8} md={4}>
        <ProviderSkeleton />
      </Grid>
      <Grid item xs={12} sm={8} md={4}>
        <ProviderSkeleton />
      </Grid>
      <Grid item xs={12} sm={8} md={4}>
        <ProviderSkeleton />
      </Grid>
      <Grid item xs={12} sm={8} md={4}>
        <ProviderSkeleton />
      </Grid>
      <Grid item xs={12} sm={8} md={4}>
        <ProviderSkeleton />
      </Grid>
    </>
  );
};
