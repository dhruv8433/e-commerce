"use client";

import Bookings from "@/app/components/Bookings";
import Bookmark from "@/app/components/Bookmark";
import Notification from "@/app/components/Notification";
import UserProfile from "@/app/components/UserProfile";
import { Container } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const parmas = useParams();
  console.log(parmas.profileOption);

  if (parmas && parmas.profileOption == "bookings") {
    return (
      <Container>
        <UserProfile data={<Bookings />} changeRoute={true} />
      </Container>
    );
  } else if (parmas && parmas.profileOption == "notifications") {
    return (
      <Container>
        <UserProfile data={<Notification />} changeRoute={true} />
      </Container>
    );
  } else if (parmas && parmas.profileOption == "bookmark") {
    return (
      <Container>
        <UserProfile data={<Bookmark />} changeRoute={true} />
      </Container>
    );
  } else {
    return (
      <Container>
        <UserProfile />
      </Container>
    );
  }
};

export default page;
