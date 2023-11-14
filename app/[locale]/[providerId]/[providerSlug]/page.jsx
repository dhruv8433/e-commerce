"use client";

import { getService } from "@/app/services/getServices";
import { GetSingleProvider } from "@/app/services/getProviders";
import { Container, Grid } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProviderDetailsPage from "@/app/components/ProviderDetailsPage";
import Services from "@/app/components/Services";

const page = () => {
  const [services, setServices] = useState([]);
  const [provider, setProvider] = useState([]);

  const [providerLoading, setProviderLoading] = useState(true);
  const [serviceLoading, setServiceLoading] = useState(true);
  const { providerId } = useParams();

  async function getServices() {
    try {
      // service of particular provider
      const result = await getService(providerId);
      setServices(result);
      setServiceLoading(false);

      // particular provider
      const serviceProvider = await GetSingleProvider(providerId);
      setProvider(serviceProvider);
      setProviderLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="breadcrums"></div>
      <Container>
        <Grid container spacing={2}>
          {/* particular provider component */}
          <ProviderDetailsPage
            providerLoading={providerLoading}
            provider={provider}
          />
          {/* related provider services */}
          <Services
            serviceLoading={serviceLoading}
            services={services}
            providerId={providerId}
          />
        </Grid>
      </Container>
    </div>
  );
};

export default page;
