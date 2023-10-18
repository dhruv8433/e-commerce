"use client";

import React from "react";
import { Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { DeleteOutline } from "@mui/icons-material";
import toast from "react-hot-toast";

const ServiceCard = ({ services, deleteIcon }) => {
  const t = useTranslations("service");
  // to navigate particular service page
  const { providerId } = useParams();
  const { providerSlug } = useParams();

  const deleteService = () => {
    toast.success("Service Deleted Success !");
  };

  return (
    <>
      <Link
        href={`/${providerId}/${providerSlug}/${services.id}/${services.slug}`}
      >
        <Card className="my-3 hover:cursor-pointer" sx={{ p: 1, height: 320 }}>
          {/* Left side with image, title, and rating */}
          <CardMedia
            component="img"
            sx={{ width: "100%", height: 200, borderRadius: "10px" }}
            image={services.image}
            alt=""
          />
          <CardContent>
            <h1 className="font-semibold text-1xl">{services.title}</h1>
            <p className="text-slate-500">
              {t("rating")}:{" "}
              <span className="bg-green-500 px-2 rounded">
                {services.rating}
              </span>
            </p>

            {/* Right side with the "Add" button */}
            <div className="mt-2 flex justify-between items-center">
              <div className="price">
                <p className="text-blue-500 text-2xl">
                  ${services.discounted_price}
                  <del>
                    <span className="text-xs text-slate-500">
                      {services.price}
                    </span>
                  </del>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
      {deleteIcon === true ? (
        <IconButton
          sx={{ mt: "-100px", ml: "80%" }}
          onClick={() => deleteService()}
        >
          <DeleteOutline sx={{ color: "red" }} />
        </IconButton>
      ) : (
        ""
      )}
    </>
  );
};

export default ServiceCard;
