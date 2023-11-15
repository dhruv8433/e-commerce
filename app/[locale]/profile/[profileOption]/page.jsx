"use client";

import Bookings from "@/app/components/Bookings";
import Bookmark from "@/app/components/Bookmark";
import DeleteAccount from "@/app/components/DeleteAccount";
import Notification from "@/app/components/Notification";
import UserProfile from "@/app/components/UserProfile";
import { Container } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const parmas = useParams();
  console.log(parmas.profileOption);

  // based on this four profile route we got desired page or if user change route than go back to profile page again
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
  } else if (parmas && parmas.profileOption == "delete-account") {
    return (
      <Container>
        <UserProfile data={<DeleteAccount />} changeRoute={true} />
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
