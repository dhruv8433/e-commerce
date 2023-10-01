"use client";

import UserProfile from "@/app/components/UserProfile";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const router = useParams();
  console.log(router.profileOption);
  return <UserProfile content={router.profileOption} />;
};

export default page;
