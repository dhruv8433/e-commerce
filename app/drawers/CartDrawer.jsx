"use client";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Divider, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import { close, open } from "../config/config";
import { useSelector } from "react-redux";
import ServiceCard from "../components/ServiceCard";

const CartDrawer = () => {
  const [openCart, setOpenCart] = useState(false);

  const items = useSelector((state) => state.cart.data);
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
            {items.map((service) => (
              <ServiceCard
                key={service.id}
                services={service}
                deleteIcon={true}
              />
            ))}
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default CartDrawer;