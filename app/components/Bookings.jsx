"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { GetOrdersService } from "../services/getOrdersService";
import { useSelector } from "react-redux";

const Bookings = () => {
  const [services, setServices] = useState([]);
  const token = useSelector((state) => state.isAuthenticate.user.token);

  async function gettingServices() {
    try {
      const service = await GetOrdersService();
      console.log(service);
      setServices(service);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    gettingServices();
  }, []);
  return (
    <>
      <div>Bookings</div>
      <hr />
      {services.map((order) => {
        if (order.userToken == token)
          return (
            <div className="p-1 border border-gray-300 my-2 text-start">
              <div className="">Order Date: {order.orderDate}</div>
              <div className="">Order Status: {order.status}</div>
              <div className="">
                {order.data.map((singleOrder) => (
                  <ServiceCard services={singleOrder} />
                ))}
              </div>
            </div>
          );
      })}
    </>
  );
};

export default Bookings;
