import { Container, Grid } from "@mui/material";
import React from "react";
import UserProfile from "../../components/UserProfile";
import { company_name } from "@/app/config/config";

export const metadata = {
  title: `Profile | ${company_name}`,
};

const page = () => {
  return (
    <div className="flex justify-center">
      <Container>
        <UserProfile />
      </Container>
    </div>
  );
};

export default page;
