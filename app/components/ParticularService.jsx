import { Button, Container, Grid } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";
import CustomButton from "../common/CustomButton";

const ParticularService = ({ service }) => {
  //  function to add to cart
  async function addToCart() {
    toast.success("Added Success");
    console.log(service);
  }
  return (
    <Container>
      <div className="h-auto my-10">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div className="image" style={{ height: "600px", width: "500px" }}>
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
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
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

            <CustomButton
              children={"Add to Cart"}
              varient={"contained"}
              customClass={"w-full my-10"}
              customFunction={() => addToCart()}
            >
              Add to card
            </CustomButton>
            <Button fullWidth sx={{ mt: 1, mb: 1 }} variant="outlined">
              Add to Wishlist
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ParticularService;
