import { Grid } from "@mui/material";
import React from "react";
import ProviderSkeleton from "./Skeletons";
import DetailedProvider from "./DetailedProvider";
import { company_name } from "../config/config";

const ProviderDetailsPage = ({ providerLoading, provider }) => {
  return (
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
      {/* <div className="mt-4  rounded-md justify-center items-center bg-slate-100">
        <div className="flex justify-center">
          <h1 className="text-2xl py-1">User Reviews</h1>
        </div>
      </div> */}
    </Grid>
  );
};

export default ProviderDetailsPage;
