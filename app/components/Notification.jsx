"use client";

import React, { useEffect, useState } from "react";
import { GetNotification } from "../services/getNotification";
import { useSelector } from "react-redux";
import NotificationCard from "./NotificationCard";
import { NotificationSkeleton } from "./Skeletons";

const Notification = () => {
  const [notification, setNotification] = useState([]);
  const [loading, setLoading] = useState(true);
  let userToken = useSelector((state) => state.isAuthenticate.user.token);

  // get all notification related to particular user
  async function getNotifications() {
    const allNotification = await GetNotification(userToken);
    setNotification(allNotification);
    setLoading(false);
    console.log(allNotification);
  }

  useEffect(() => {
    getNotifications();
  }, []);
  return (
    <div>
      {loading ? (
        <NotificationSkeletons />
      ) : (
        notification.map((notify) => {
          if (notify.token == userToken)
            return <NotificationCard notify={notify} />;
        })
      )}
    </div>
  );
};

export default Notification;

const NotificationSkeletons = () => {
  return (
    <>
      <NotificationSkeleton />
      <NotificationSkeleton />
      <NotificationSkeleton />

      <NotificationSkeleton />
      <NotificationSkeleton />
      <NotificationSkeleton />
    </>
  );
};
