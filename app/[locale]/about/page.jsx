import React from "react";

import { company_name } from "@/app/config/config";
import AboutPage from "@/app/pages/AboutPage";

export const metadata = {
  title: `About | ${company_name}`,
};

const page = () => {
  return <AboutPage />;
};

export default page;
