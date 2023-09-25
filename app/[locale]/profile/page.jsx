import { Container, Grid } from "@mui/material";
import React from "react";
import UserProfile from "../../components/UserProfile";

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
