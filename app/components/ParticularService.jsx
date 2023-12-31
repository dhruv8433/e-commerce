import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../action/action";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const ParticularService = ({ service, t }) => {
  const dispatch = useDispatch();
  const { providerId, providerSlug } = useParams();
  const route = useRouter();

  // to get user details
  const user = useSelector((state) => state.isAuthenticate.user);
  const cart = useSelector((state) => state.cart.cartItems); // Get the cart from the Redux store

  // Check if the service is already in the cart
  const isServiceInCart = cart
    ? cart.some((item) => item.id === service.id)
    : "";

  //  function to add to cart
  function addItemsToCart() {
    try {
      // if user is authenicated than only
      if (user) {
        if (isServiceInCart) {
          toast.error("Service alredy existing inside cart");
          return;
        }
        dispatch(addToCart(service));
        toast.success("Added Success");
        console.log(service);
      } else {
        toast.error("Please login first!!");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
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
              <img
                src={service.image}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
                alt={service.title}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mt: { xs: 5, md: 0 } }}>
              <div className="info p-4 border border-gray-300 rounded-lg">
                <h1 className="text-gray-600 text-2xl">{service.title}</h1>
                <h1 className="color-primary text-4xl">
                  ${service.discounted_price}
                  <span className="text-lg text-gray-500">
                    <del>{service.price}</del>
                  </span>
                </h1>
                <h1 className="p-1 bg-green-400 w-fit px-3 rounded">
                  {service.rating}
                </h1>
              </div>

              <div className="info mt-4 p-4 border border-gray-300 rounded-lg">
                <h1 className="text-2xl font-semibold">Service Description:</h1>
                <h1 className="mt-4">{service.description}</h1>
              </div>

              <Button
                fullWidth
                variant="contained"
                onClick={() => addItemsToCart()}
                className="bg-violet-500"
                sx={{
                  bgcolor: "#c61aed",
                  mt: 2,
                  "&:hover": { backgroundColor: "#c61aed" },
                }}
              >
                {t("add_cart")}
              </Button>
              <Link href={`/${providerId}/${providerSlug}`}>
                <Button
                  fullWidth
                  sx={{ mt: 1, mb: 1 }}
                  variant="outlined"
                  className="text-violet-500"
                >
                  {t("explore")}
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ParticularService;
