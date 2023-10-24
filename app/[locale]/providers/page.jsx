import { company_name } from "@/app/config/config";
import React from "react";
import ProviderPage from "@/app/pages/ProviderPage";

export const metadata = {
  title: `Providers | ${company_name}`,
};

const page = () => {
  return <ProviderPage />;
};

export default page;
