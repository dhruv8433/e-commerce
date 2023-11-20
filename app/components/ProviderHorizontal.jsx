import { ArrowRightAltRounded } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const ProviderHorizontal = ({ provider }) => {
  return (
    <div className="p-2">
      <Link href={`/${provider.id}/${provider.slug}`}>
        <Card
          style={{
            display: "flex",
            alignItems: "center",
            height: "240px",
            padding: 1,
          }}
        >
          <div
            className="h-full flex justify-center items-center"
            style={{ borderRadius: "10px", width: 400 }}
          >
            <CardMedia
              component="img"
              alt={provider.title}
              image={provider.banner}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </div>
          <CardContent className="w-full">
            <h1 className="text-start text-2xl font-semibold">
              {provider.title}
            </h1>
            <Typography
              variant="body2"
              align="start"
              paragraph
              className="bg-violet-500 w-max p-2 rounded-md text-white"
            >
              {`Order Completed: ${provider.order_completed}`}
            </Typography>

            <Divider />
            <p className="text-start"> address: {provider.address}</p>
            <div className="flex items-center">
              <h1>Rating: </h1>
              <Rating value={provider.rating} readOnly precision={0.5} />
            </div>

            <div className="text-end flex w-full justify-end rounded-full mt-4">
              <IconButton className="border border-purple-400">
                <ArrowRightAltRounded className="border rounded-full border-violet-500" />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default ProviderHorizontal;
