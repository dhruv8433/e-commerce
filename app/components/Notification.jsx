"use client";

import React, { useEffect, useState } from "react";
import { GetNotification } from "../services/getNotification";
import { useSelector } from "react-redux";
import { Card, CardMedia } from "@mui/material";
import { NotificationsRounded } from "@mui/icons-material";

const Notification = () => {
  const [notification, setNotification] = useState([]);
  let userToken = useSelector((state) => state.isAuthenticate.user.token);

  // get all notification related to particular user
  async function getNotifications() {
    const allNotification = await GetNotification();
    setNotification(allNotification);
    console.log(allNotification);
  }

  useEffect(() => {
    getNotifications();
  }, []);
  return (
    <div>
      {notification.map((notify) => {
        if (notify.token == userToken)
          return (
            <div key={notify.id}>
              <Card sx={{ display: "flex", p: 1, m: 1 }}>
                <CardMedia className="grid items-center pr-2">
                  <NotificationsRounded />
                </CardMedia>
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <h1 className="text-start text-lg">{notify.message}</h1>
                    <p className="text-xs text-gray-400">{notify.date}</p>
                  </div>
                  <p className="text-start text-sm text-gray-500">
                    {notify.details}
                  </p>
                </div>
              </Card>
            </div>
          );
      })}
    </div>
  );
};

export default Notification;
