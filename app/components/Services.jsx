import { Grid } from "@mui/material";
import React from "react";
import { SkeletonServiceLoading } from "./Skeletons";
import ServiceCard from "./ServiceCard";

const Services = ({ serviceLoading, services, providerId }) => {
  return (
    <>
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
    </>
  );
};

export default Services;
