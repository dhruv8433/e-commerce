"use client";

import Bookings from "@/app/components/Bookings";
import UserProfile from "@/app/components/UserProfile";
import { Container } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const parmas = useParams();
  console.log(parmas.profileOption);
  return (
    <Container>
      {/* if params is bookings than render this section */}
      {parmas && parmas.profileOption === "bookings" ? (
        <>
          <UserProfile data={<Bookings />} changeRoute={true} />
        </>
      ) : (
        <UserProfile />
      )}
    </Container>
  );
};

export default page;
