import { NotificationsRounded } from "@mui/icons-material";
import { Card, CardMedia } from "@mui/material";
import React from "react";

const NotificationCard = ({ notify }) => {
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
          <p className="text-start text-sm text-gray-500">{notify.details}</p>
        </div>
      </Card>
    </div>
  );
};

export default NotificationCard;
