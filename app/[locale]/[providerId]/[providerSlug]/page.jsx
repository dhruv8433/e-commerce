"use client";

import ServiceCard from "@/app/components/ServiceCard";
import { getService } from "@/app/services/getServices";
import { GetSingleProvider } from "@/app/services/getProviders";
import { Container, Grid } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DetailedProvider from "@/app/components/DetailedProvider";
import { company_name } from "@/app/config/config";

const page = () => {
  const [services, setServices] = useState([]);
  const [provider, setProvider] = useState([]);
  const { providerId } = useParams();

  async function getServices() {
    try {
      // service of particular provider
      const result = await getService(providerId);
      setServices(result.data);
      // particular provider
      const serviceProvider = await GetSingleProvider(providerId);
      setProvider(serviceProvider);
    } catch (error) {
      console.log(error);
    }
  }

  // title of every dynamic page
  document.title = `${provider.title} | ${company_name}`;

  useEffect(() => {
    // temp delay and without that we can't see page
    const delay = setTimeout(() => {
      getServices();
    }, 2000);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="breadcrums"></div>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} md={4}>
            <div className="right mt-24">
              <DetailedProvider provider={provider} />
            </div>
            <div className="mt-4  rounded-md justify-center items-center bg-slate-100">
              <div className="flex justify-center">
                <h1 className="text-2xl py-1">User Reviews</h1>
              </div>
              {/* user reviews based on providers */}
              {/* <div className="div">
                <UserReviewCard review={"lorem"} user={"dhruv"} />
              </div> */}
            </div>
          </Grid>
          <Grid item sm={12} md={8}>
            <div className="left mt-24 p-3 rounded bg-slate-100">
              <Grid container spacing={3}>
                {services.map((service) => (
                  <Grid item xs={12} sm={8} md={4} key={service.id}>
                    <ServiceCard key={service.id} services={service} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default page;
