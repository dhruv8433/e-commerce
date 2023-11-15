"use client";

import React, { useEffect, useState } from "react";
import { GetNotification } from "../services/getNotification";
import { useSelector } from "react-redux";
import NotificationCard from "./NotificationCard";
import { NotificationSkeleton } from "./Skeletons";
import Lottie from "lottie-react";
import noNotification from "@/app/json/animations/no-notification-1.json";
import ProfilePageName from "./ProfilePageName";

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
      <ProfilePageName name={"Notifications"} />
      {loading ? (
        <NotificationSkeletons />
      ) : notification && notification.length > 0 ? (
        notification.map((notify) => {
          return notify.token === userToken ? (
            <NotificationCard notify={notify} />
          ) : null;
        })
      ) : (
        <div className="flex justify-center items-center h-[466px]">
          {/* If no notification found for a particular user */}
          <Lottie animationData={noNotification} />
        </div>
      )}
    </div>
  );
};

export default Notification;

const NotificationSkeletons = () => {
  // notification skeleton layout
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
