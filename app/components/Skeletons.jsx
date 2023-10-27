import React from "react";
import { Card, CardContent, CardMedia, Skeleton } from "@mui/material";

export const ProviderSkeleton = () => {
  return (
    <div className="p-1 items-center text-center">
      <Card sx={{width: 380}}>
        {/* Skeleton loader for banner image */}
        <Skeleton variant="rectangular" sx={{ height: 250 }} />

        <div className="flex justify-center">
          {/* Skeleton loader for logo image */}
          <Skeleton
            variant="circular"
            sx={{
              height: 120,
              width: 120,
              borderRadius: "50%",
              mt: -8,
              border: "5px solid white",
            }}
          />
        </div>

        <CardContent className="text-center relative">

          <div className="info -mt-4 z-10 relative">
            {/* Skeleton loader for title */}
            <Skeleton variant="text" />

            <div className="flex justify-center p-1">
              {/* Skeleton loader for order completed */}
              <Skeleton variant="text"  width={200}/>
            </div>

            <div className="flex justify-center items-center">
              {/* Skeleton loader for rating */}
              <Skeleton variant="text" width={100} height={30} />
            </div>

            <div className="flex justify-center items-center mt-4 mb-2 p-2">
              {/* Skeleton loader for an icon */}
              <Skeleton variant="circular" sx={{ width: 50, height: 50 }} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProviderSkeleton;
