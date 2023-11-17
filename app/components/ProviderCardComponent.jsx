import React from "react";
import Provider from "./Provider";
import { Box, Grid } from "@mui/material";

const ProviderCardComponent = ({ providers }) => {
  return (
    <div className="providercard" style={{marginBlock: 20}}>
      <Box>
        <Grid container spacing={2}>
          {/* we only display 3 providers on home page */}
          {providers.slice(6).map((provider) => (
            <Grid item xs={12} sm={6} md={4} key={provider.id}>
              {/* calling single provider component */}
              <Provider key={provider.id} provider={provider} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProviderCardComponent;
