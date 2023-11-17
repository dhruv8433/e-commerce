"use client";
import React, { useEffect, useState } from "react";
import { GetProviders } from "../services/getProviders";
import Breadcrumb from "../common/Breadcrumbs";
import Provider from "./Provider";
import { Container, Grid } from "@mui/material";
import ProviderCardComponent from "./ProviderCardComponent";
import ProviderSkeleton from "./Skeletons";

const TopProviders = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getTopProvider() {
    const response = await GetProviders();
    console.log(response);
    setProviders(response);
    setLoading(false);
  }
  useEffect(() => {
    getTopProvider();
  }, []);
  return (
    <div className="pt-20">
      <Breadcrumb breadcrumb={"Top Providers"} title={"Top Providers"} />
      <Container>
        {loading ? (
          <Grid container>
            <Grid item xs={12} sm={8} md={4}>
              <ProviderSkeleton />
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <ProviderSkeleton />
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <ProviderSkeleton />
            </Grid>
          </Grid>
        ) : (
          <ProviderCardComponent providers={providers} />
        )}
      </Container>
    </div>
  );
};

export default TopProviders;
