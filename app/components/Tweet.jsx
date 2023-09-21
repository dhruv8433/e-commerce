import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";

// reusable tweet component that contain layout of twitter post
const Tweet = ({ twitter }) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <div className="flex items-center">
          <TwitterIcon
            sx={{ fontSize: 40, color: "#1DA1F2", marginRight: 2 }}
          />
          <Typography variant="h6">{twitter.username}</Typography>
        </div>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {twitter.tweet} <span className="text-blue-600">{twitter.tags}</span>
        </Typography>
        <div className="flex justify-between mt-2">
          <IconButton size="small">
            <ChatBubbleOutlineIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <RepeatIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default Tweet;
