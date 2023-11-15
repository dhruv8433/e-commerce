import { ArrowRightAltRounded } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const ProviderHorizontal = ({ provider }) => {
  return (
    <div>
      {/* <Link href={`${provider.id}/${provider.slug}`}> */}
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          height: "200px",
          marginBlock: 10,
        }}
      >
        <div className="border border-purple-400 h-full flex justify-center items-center rounded-md">
          <CardMedia
            component="img"
            alt={provider.title}
            image={provider.logo}
            style={{ height: 100, width: "300px", objectFit: "contain" }}
          />
        </div>
        <CardContent>
          <Typography variant="h6" align="start">
            {provider.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            align="start"
            paragraph
          >
            {`Order Completed: ${provider.order_completed}`}
          </Typography>
          <div className="flex">
            <h1>Rating: </h1>
            <Rating value={provider.rating} readOnly precision={0.5} />
          </div>

          <div className="text-start border border-purple-400 rounded-full w-max mt-4">
            <IconButton>
              <ArrowRightAltRounded />
            </IconButton>
          </div>
        </CardContent>
      </Card>
      {/* </Link> */}
    </div>
  );
};

export default ProviderHorizontal;
