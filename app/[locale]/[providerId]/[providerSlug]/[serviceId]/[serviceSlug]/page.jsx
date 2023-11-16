"use client";
import ParticularService from "@/app/components/ParticularService";
import { ServiceDetailsSkeleton, Serviceskeleton } from "@/app/components/Skeletons";
import { company_name } from "@/app/config/config";
import { getService } from "@/app/services/getServices";
import { Box, Container } from "@mui/material";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  // first we want provider id to find which provider service is this and based on that we find that particular service on that provider
  const { serviceId } = useParams();
  const { providerId } = useParams();

  // service data set
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  // async function to find particular provider
  async function particularProvider() {
    const response = await getService(providerId);
    setService(response);
    setLoading(false);
  }

  useEffect(() => {
    particularProvider();
  }, []);

  const t = useTranslations("service")
  return (
    <Box sx={{ pt: { xs: "4rem", md: "5rem" } }}>
      {loading ? (
        <Container>
          <ServiceDetailsSkeleton />
        </Container>
      ) : (
        service.map((response) => {
          //  if service id existing inside provider service
          if (serviceId == response.id) {
            // title based on service
            document.title = `${response.title} | ${company_name}`;
            // if condition match then return this component
            return <ParticularService key={response.id} service={response} t={t} />;
          }
        })
      )}
    </Box>
  );
};

export default page;
