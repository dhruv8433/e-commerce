import { Box, Card, CardContent, CardMedia } from "@mui/material";
import Link from "next/link";
import React from "react";

// we got deal as a props so we can reuse this component where we need
const Deal = ({ deal }) => {
  return (
    <Box sx={{ mt: { xs: "10px", md: "10px" }, pb: "20px" }}>
      {/* routing to their provider page */}
      <Link href={`/${deal.provider_id}/${deal.slug}`}>
        <Card className="xl:flex h-auto lg:block">
          <CardMedia
            component={"img"}
            image={deal.image}
            sx={{
              height: 300,
              flex: "0 0 200px",
              objectFit: "cover",
            }}
          />
          <CardContent>
            <h1 className="text-2xl font-bold">{deal.title}</h1>
            <p className="text-sm">{deal.short_intro}</p>
            <p className="py-1">
              <span className="font-bold">Address: </span>
              {deal.address}
            </p>
            <p className="py-1 ">
              <span className="font-bold">Provider: </span>
              {deal.provider}
            </p>
            <p className="p-2 bg-green-500 w-max rounded">
              {deal.discount} off
            </p>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default Deal;
