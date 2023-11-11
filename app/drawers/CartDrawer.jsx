"use client";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Divider, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import { close, open } from "../config/config";
import { useSelector } from "react-redux";
import ServiceCard from "../components/ServiceCard";
import emptyCartAnimation from "@/app/json/animations/empty_cart.json";
import Lottie from "lottie-react";
import CustomButton from "../common/CustomButton";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckoutButton from "../components/CheckOut";

const CartDrawer = () => {
  const [openCart, setOpenCart] = useState(false);

  const items = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <IconButton onClick={() => open(setOpenCart)}>
        <ShoppingCartOutlined />
      </IconButton>
      <Drawer anchor="right" open={openCart} onClose={() => close(setOpenCart)}>
        <Box sx={{ width: { xs: "300px", md: "400px" } }}>
          <div className="p-1">
            <h1 className="font-semibold text-2xl">Your Services</h1>
            <Divider />
            {/* reuser service card and i have to just display delete icon on that based on props -- simple */}
            {items.length > 0 ? (
              items.map((service) => (
                <ServiceCard
                  key={service.id}
                  services={service}
                  deleteIcon={true}
                />
              ))
            ) : (
              <div className="flex justify-center items-center h-screen">
                <Lottie animationData={emptyCartAnimation} />
              </div>
            )}

            {/* payment button integration */}
            {items.length > 0 ? <StripeCheckoutButton price={10} /> : ""}
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default CartDrawer;
