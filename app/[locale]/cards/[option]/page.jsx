"use client";
import DealsofDay from "@/app/components/DealsofDay";
import ShowCase from "@/app/components/ShowCase";
import TopProviders from "@/app/components/TopProviders";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { option } = useParams();
  console.log(option);

  if (option == "showcase-of-week") {
    return <ShowCase />;
  } else if (option == "deals-of-week") {
    return <DealsofDay />;
  } else if (option == "top-providers") {
    return <TopProviders />;
  }
};

export default page;
