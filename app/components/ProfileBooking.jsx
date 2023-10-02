import { Grid } from "@mui/material";
import React from "react";
import ServiceCard from "./ServiceCard";

const ProfileBooking = () => {
  return (
    <div className="h-auto">
      <Grid container>
        <Grid item xs={12} md={6}>
          <ServiceCard services={"temp"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="booking-card">
            <h2>Booking Details</h2>
            <div className="details">
              <p>Total Amount: $</p>
              <p>GST (18%): $</p>
              <p>Total Payable: $</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileBooking;
