import React, { useEffect } from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import CustomButton from "../common/CustomButton";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

const ServiceCard = ({ services }) => {
  const t = useTranslations("service");
  // to navigate particular service page
  const { providerId } = useParams();
  const { providerSlug } = useParams();

  return (
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
            <span className="bg-green-500 px-2 rounded">{services.rating}</span>
          </p>

          {/* Right side with the "Add" button */}
          <div className="mt-2 flex justify-between">
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
            {/* <CustomButton
              children={t("add")}
              size={"small"}
              customClass={"bg-blue-500"}
              variant={"contained"} // Corrected the prop name
            /> */}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
