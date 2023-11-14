"use client";
import React, { useEffect, useState } from "react";
import { GetOrdersService } from "../services/getOrdersService";
import { useSelector } from "react-redux";
import SummeryCard from "./SummeryCard";
import { BookingSkeleton } from "./Skeletons";

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
  return (
    <>
      <h1 className="text-3xl font-bold">Bookings</h1>
      <hr />
      {loading ? (
        <>
          <BookingSkeleton />
          <BookingSkeleton />
          <BookingSkeleton />
        </>
      ) : (
        services.map((order) => {
          if (order.userToken === token) {
            let total = 0;
            return <SummeryCard key={order._id} order={order} total={total} />;
          }
        })
      )}
    </>
  );
};

export default Bookings;
