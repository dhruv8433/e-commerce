import { CardMedia, Grid } from "@mui/material";
import React from "react";
import { Card as MUICard } from "@mui/material";
import Link from "next/link";

const Card = ({ homecard }) => {
  return (
    <Grid item xs={12} sm={8} md={4}>
      <Link href={`/cards/${homecard.slug}`}>
        <MUICard
          className=" bg-gray-200 hover:bg-white rounded-md cursor-pointer"
          sx={{
            ":hover": {
              transition: "all 0.3s ease-in-out", // Add transition for all properties
              transform: "scale(1.05)", // Increase scale on hover
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)", // Add a shadow on hover
            },
          }}
        >
          <CardMedia
            sx={{ p: 1, borderRadius: 4 }}
            src={homecard.image}
            height={300}
            width={200}
            component={"img"}
            alt="sale-img"
          />
          <div className="py-8">
            <div className="flex justify-center items-center ">
              <h1 className="text-2xl font-semibold color-primary">
                {homecard.title}
              </h1>
            </div>
            <div className="flex justify-center">
              <h1 className="text-1xl">{homecard.description}</h1>
            </div>
          </div>
        </MUICard>
      </Link>
    </Grid>
  );
};

export default Card;
