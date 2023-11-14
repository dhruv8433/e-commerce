"use client";

import ServiceCard from "@/app/components/ServiceCard";
import { getService } from "@/app/services/getServices";
import { GetSingleProvider } from "@/app/services/getProviders";
import { Container, Grid } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DetailedProvider from "@/app/components/DetailedProvider";
import { company_name } from "@/app/config/config";
import ProviderSkeleton, { Serviceskeleton } from "@/app/components/Skeletons";

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
    // temp delay and without that we can't see page
    getServices();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="breadcrums"></div>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} md={4}>
            <div className="right mt-24">
              {providerLoading ? (
                <ProviderSkeleton />
              ) : (
                provider.map((singleProvider) => {
                  document.title = `${singleProvider.title} | ${company_name}`;
                  return <DetailedProvider provider={singleProvider} />;
                })
              )}
            </div>
            <div className="mt-4  rounded-md justify-center items-center bg-slate-100">
              <div className="flex justify-center">
                <h1 className="text-2xl py-1">User Reviews</h1>
              </div>
            </div>
          </Grid>
          <Grid item sm={12} md={8}>
            <div className="left mt-24 p-3 rounded bg-slate-100">
              <Grid container spacing={3}>
                {serviceLoading ? (
                  <SkeletonServiceLoading />
                ) : (
                  services.map((service) => {
                    // if service's provider id match with this provider id that we got from params
                    if (service.provider_id == providerId) {
                      return (
                        <Grid item xs={12} sm={8} md={4} key={service.id}>
                          <ServiceCard key={service.id} services={service} />
                        </Grid>
                      );
                    }
                  })
                )}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default page;

const SkeletonServiceLoading = () => {
  return (
    <>
      <Grid container spacing={2} paddingY={1}>
        <Grid item xs={12} sm={8} md={4}>
          <Serviceskeleton />
          <Serviceskeleton />
          <Serviceskeleton />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Serviceskeleton />
          <Serviceskeleton />
          <Serviceskeleton />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Serviceskeleton />
          <Serviceskeleton />
          <Serviceskeleton />
        </Grid>
      </Grid>
    </>
  );
};
