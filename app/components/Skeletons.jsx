import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

export const ProviderSkeleton = () => {
  return (
    <div className="p-1 items-center text-center">
      <Card sx={{ width: 380 }}>
        {/* Skeleton loader for banner image */}
        <Skeleton variant="rectangular" sx={{ height: 250 }} />

        <CardContent className="text-center relative">
          <div className="info -mt-4 z-10 relative">
            {/* Skeleton loader for title */}
            <Skeleton variant="text" />

            <div className="flex justify-Start p-1">
              {/* Skeleton loader for order completed */}
              <Skeleton variant="text" width={200} />
            </div>

            <div className="flex justify-start items-center">
              {/* Skeleton loader for rating */}
              <Skeleton variant="text" width={100} height={30} />
            </div>

            <div className="flex justify-end items-center mt-4 mb-2 p-2">
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

export const Serviceskeleton = () => {
  return (
    <Card className="my-1 hover:cursor-pointer" sx={{ p: 1, height: 350 }}>
      <Skeleton
        variant="rectangular"
        sx={{ height: 200, borderRadius: "10px" }}
      />
      <CardContent>
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="text" width={80} height={12} />
        <Skeleton variant="text" width={50} height={12} />
      </CardContent>
    </Card>
  );
};

export const BookingSkeleton = () => {
  return (
    <Card className="p-4 m-2 border border-gray-300 rounded my-2">
      <CardContent>
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl mb-4 text-start">
            <Skeleton variant="text" width={150} />
          </h1>
          <div className="mb-4 text-right">
            <Skeleton variant="text" width={100} />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="font-semibold text-xl mb-2 text-start">
            <Skeleton variant="text" width={120} />
          </h2>
          <ul className="text-start">
            <TableContainer>
              <Table>
                <TableBody>
                  {[1, 2, 3].map((index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Skeleton variant="text" width={150} />
                      </TableCell>
                      <TableCell align="right">
                        <Skeleton variant="text" width={50} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ul>
        </div>

        <div className="mb-4 text-right grid justify-items-end">
          <h2 className="font-semibold text-xl">
            <Skeleton variant="text" width={120} />
          </h2>
          <p className="text-blue-600 text-xl font-semibold">
            <Skeleton variant="text" width={80} />
          </p>
        </div>

        <div className="text-right text-gray-500 text-sm grid justify-end">
          <h2 className="font-semibold text-xl">
            <Skeleton variant="text" width={100} />
          </h2>
          <p>
            <Skeleton variant="text" width={100} />
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const NotificationSkeleton = () => {
  return (
    <>
      <div>
        <Card sx={{ display: "flex", p: 1, mx: 2, my: 3 }}>
          <CardMedia className="grid items-center pr-2">
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
          </CardMedia>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <Skeleton variant="text" width={200} />
              <Skeleton variant="text" width={80} />
            </div>
            <Skeleton variant="text" width="100%" />
          </div>
        </Card>
      </div>
    </>
  );
};

export const SkeletonServiceLoading = () => {
  return (
    <>
      <Grid container spacing={2} paddingY={1}>
        <Grid item xs={12} sm={8} md={4}>
          <Serviceskeleton />
          <Serviceskeleton />
          <Serviceskeleton />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Serviceskeleton />
          <Serviceskeleton />
          <Serviceskeleton />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Serviceskeleton />
          <Serviceskeleton />
          <Serviceskeleton />
        </Grid>
      </Grid>
    </>
  );
};
