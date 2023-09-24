import React from "react";
import { Avatar, Card, CardContent, Typography } from "@mui/material";

const UserReviewCard = ({ user, review }) => {
  return (
    <Card className="max-w-md mx-auto p-4 shadow-md rounded-md bg-white">
      <div className="flex items-center mb-4">
        <Avatar alt={user.name} src={user.avatar} />
        <div className="ml-3">
          <Typography variant="subtitle1" component="div">
            {user.name}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {user.location}
          </Typography>
        </div>
      </div>
      <Typography variant="body2">{review}</Typography>
    </Card>
  );
};

export default UserReviewCard;
