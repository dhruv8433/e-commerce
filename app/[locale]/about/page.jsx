import React from "react";
import AboutUs from "./AboutUs";
import { company_name } from "@/app/config/config";

export const metadata = {
  title: `About | ${company_name}`,
};

const page = () => {
  return <AboutUs />;
};

export default page;
