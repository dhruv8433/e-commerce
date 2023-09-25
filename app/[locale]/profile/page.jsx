import { Container, Grid } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center">
      <Container>
        <div className="mt-20 w-full">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div className="border border-red-300">Links Border</div>
            </Grid>
            <Grid item xs={12} md={8}>
              <div className="border border-blue-300">Content</div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default page;
