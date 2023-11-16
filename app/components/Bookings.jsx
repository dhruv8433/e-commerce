"use client";
import React, { useEffect, useState } from "react";
import { GetOrdersService } from "../services/getOrdersService";
import { useSelector } from "react-redux";
import SummeryCard from "./SummeryCard";
import { BookingSkeleton } from "./Skeletons";
import Lottie from "lottie-react";
import noBookings from "@/app/json/animations/empty_cart.json";
import ProfilePageName from "./ProfilePageName";
import { Button } from "@mui/material";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Bookings = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.isAuthenticate.user.token);
  async function gettingServices() {
    try {
      const service = await GetOrdersService(token);
      console.log(service);
      setServices(service);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    gettingServices();
  }, []);

  const t = useTranslations("profile");
  return (
    <>
      <ProfilePageName name={t("booking")} />
      {/* if loading bookings than */}
      {loading ? (
        <>
          <BookingSkeleton />
          <BookingSkeleton />
          <BookingSkeleton />
        </>
      ) : // if there are bookings available
      services && services.length > 0 ? (
        services.map((order) => {
          if (order.userToken === token) {
            let total = 0;
            return <SummeryCard key={order._id} order={order} total={total} />;
          }
        })
      ) : (
        // if there is no bookings
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "460px" }}
        >
          <Lottie animationData={noBookings} style={{ height: 260 }} />
          <h1 className="text-2xl font-semibold">{t("no_bookings")}</h1>
          <p className="mb-4">{t("explore_book")}</p>
          <Link href={"/providers"}>
            <Button variant="outlined" size="small">
              {t("explore")}
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Bookings;
