import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CustomButton from "./CustomButton";
const ServiceCard = ({ services }) => {
  return (
    <div>
      <Card className="my-3" sx={{ display: "flex", p: 1 }}>
        {/* Left side with image, title, and rating */}
        <CardMedia
          component="img"
          sx={{ width: 200, height: 200, borderRadius: "10px" }}
          image={services.image}
          alt=""
        />
        <CardContent sx={{ width: "320px" }}>
          <h1 className="font-semibold text-2xl">{services.title}</h1>
          <p>{services.description}</p>
          <p className="text-slate-500">Rating: {services.rating}</p>
          {/* Right side with the "Add" button */}
          <div className="flex justify-between mt-10">
            <div className="price">
              <p className="text-blue-500">
                ${services.discounted_price}
                <del>
                  <span className="text-xs text-slate-500">
                    {services.price}
                  </span>
                </del>
              </p>
            </div>
            <CustomButton
              children={"Add"}
              size={"small"}
              customClass={"bg-blue-500"}
              varient={"contained"}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCard;
