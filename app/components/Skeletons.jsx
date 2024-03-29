import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
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

        <div className="flex justify-center p-1 -mt-16 ">
          <Skeleton
            className="border border-white"
            variant="circular"
            sx={{ height: 120, width: 120, borderWidth: 5 }}
          />
        </div>

        <CardContent className="text-center justify-center relative">
          <div className="info -mt-4 z-10 items-center justify-center text-center relative">
            {/* Skeleton loader for title */}
            <div className="flex justify-center p-1">
              <Skeleton variant="text" width={200} />
            </div>

            <div className="flex justify-center p-1">
              {/* Skeleton loader for order completed */}
              <Skeleton variant="text" width={140} />
            </div>

            <div className="flex justify-center items-center">
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

export const ProviderHorizontalSkeleton = ({ myWidth }) => {
  return (
    <Card
      style={{ height: "200px", marginBlock: 10, padding: 1, display: "flex" }}
    >
      <div
        className="h-full flex justify-center items-center"
        style={{ borderRadius: "10px", width: myWidth }}
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="100%"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <CardContent className="w-full">
        <Skeleton
          animation="wave"
          height={40}
          width="80%"
          style={{ marginBottom: 6 }}
        />

        <Skeleton animation="wave" height={30} width="40%" />

        <Divider />

        <Skeleton animation="wave" height={40} style={{ marginBottom: 6 }} />

        <Skeleton
          animation="wave"
          height={20}
          width="50%"
          style={{ marginBottom: 3 }}
        />

        <div className="text-end flex justify-end">
          <Skeleton
            variant="rounded"
            animation="pulse"
            height={25}
            width={25}
            sx={{ borderRadius: "50%", textAlign: "end" }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export const ServiceDetailsSkeleton = () => {
  return (
    <div className="h-auto my-10">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            className="image"
            sx={{
              height: { xs: "300px", md: "460px" },
              width: { xs: "360px", md: "500px" },
            }}
          >
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="100%"
              height="100%"
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ mt: { xs: 5, md: 0 } }}>
            <div className="info p-4 border border-gray-300 rounded-lg">
              <Skeleton
                animation="wave"
                height={30}
                width="80%"
                style={{ marginBottom: 6 }}
              />
              <Skeleton
                animation="wave"
                height={40}
                width="50%"
                style={{ marginBottom: 6 }}
              />
              <Skeleton
                animation="wave"
                height={20}
                width="20%"
                style={{ marginBottom: 6 }}
              />
            </div>

            <div className="info mt-4 p-4 border border-gray-300 rounded-lg">
              <h1 className="text-2xl font-semibold">Service Description:</h1>
              <Skeleton
                animation="wave"
                height={20}
                width="100%"
                style={{ marginTop: 10 }}
              />
              <Skeleton
                animation="wave"
                height={20}
                width="90%"
                style={{ marginTop: 10 }}
              />
              {/* Add more Skeletons for additional lines of description */}
            </div>

            <Skeleton
              animation="wave"
              height={40}
              width="100%"
              style={{ marginTop: 20 }}
            />

            <Skeleton
              animation="wave"
              height={40}
              width="100%"
              style={{ marginTop: 10 }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export const SwiperSkeleton = ({ width, height }) => {
  return (
    <div className="-mt-48">
      <Skeleton width={width} height={height} />
    </div>
  );
};
