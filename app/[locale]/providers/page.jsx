import { company_name } from "@/app/config/config";
import React from "react";
import Providers from "./Providers";

export const metadata = {
  title: `Provider | ${company_name}`,
};

const page = () => {
  return (
    <div>
      <Providers />
    </div>
  );
};

export default page;
