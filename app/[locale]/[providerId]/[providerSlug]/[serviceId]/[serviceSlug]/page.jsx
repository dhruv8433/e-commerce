"use client";
import ParticularService from "@/app/components/ParticularService";
import { company_name } from "@/app/config/config";
import { getService } from "@/app/services/getServices";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  // first we want provider id to find which provider service is this and based on that we find that particular service on that provider
  const { serviceId } = useParams();
  const { providerId } = useParams();

  // service data set
  const [service, setService] = useState([]);

  // async function to find particular provider
  async function particularProvider() {
    const response = await getService(providerId);
    setService(response);
  }

  useEffect(() => {
    particularProvider();
  }, []);
  return (
    <Box sx={{ pt: { xs: "4rem", md: "5rem" } }}>
      {service.map((response) => {
        //  if service id existing inside provider service
        if (serviceId == response.id) {
          // title based on service
          document.title = `${response.title} | ${company_name}`;
          // if condition match then return this component
          return <ParticularService key={response.id} service={response} />;
        }
      })}
    </Box>
  );
};

export default page;
