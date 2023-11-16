"use client";

import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { DeleteOutline } from "@mui/icons-material";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../action/action";

const ServiceCard = ({ services, deleteIcon }) => {
  const t = useTranslations("service");
  // to navigate particular service page
  const { providerId } = useParams();
  const { providerSlug } = useParams();

  const dispatch = useDispatch();

  const deleteService = () => {
    toast.success("Service Deleted Success !");
    dispatch(removeToCart(services));
  };

  // check is user authenticated
  const isUserAuthenticated = useSelector(
    (state) => state.isAuthenticate.isAuthenticated
  );

  // fetch cart details
  const cart = useSelector((state) => state.cart.cartItems);

  // Check if the service is already in the cart
  const isServiceInCart = cart
    ? cart.some((item) => item.id === services.id)
    : "";

  // add items to cart function
  const addItem = () => {
    console.log(cart);
    // item add only when user is authenticated
    if (isUserAuthenticated) {
      // if service already in cart
      if (isServiceInCart) {
        toast.error("Service already in cart");
        return;
      }
      dispatch(addToCart(services));
      toast.success("Item added to cart");
    } else {
      toast.error("Please login first!!");
    }
  };

  return (
    <>
      <Link
        href={`/${providerId}/${providerSlug}/${services.id}/${services.slug}`}
      >
        <Card className="my-1 hover:cursor-pointer" sx={{ p: 1, height: 350 }}>
          {/* Left side with image, title, and rating */}
          <CardMedia
            component="img"
            sx={{ width: "100%", height: 200, borderRadius: "10px" }}
            image={services.image}
            alt=""
          />
          <CardContent>
            <h1 className="font-semibold text-1xl">{services.title}</h1>
            <p className="text-slate-500">
              {t("rating")}:{" "}
              <span className="bg-green-500 px-2 rounded">
                {services.rating}
              </span>
            </p>

            {/* Right side with the "Add" button */}
            <div className="flex justify-between items-center">
              <div className="price">
                <p className="text-violet-500 text-2xl">
                  ${services.discounted_price}
                  <del>
                    <span className="text-xs text-slate-500">
                      {services.price}
                    </span>
                  </del>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>

      {deleteIcon === true ? (
        <IconButton
          sx={{ mt: "-100px", ml: "80%" }}
          onClick={() => deleteService()}
        >
          <DeleteOutline sx={{ color: "red" }} />
        </IconButton>
      ) : (
        <Button
          sx={{ mt: "-100px", ml: "64%" }}
          className="text-violet-500"
          variant="outlined"
          size="small"
          onClick={() => addItem()}
        >
          {t("add")}
        </Button>
      )}
    </>
  );
};

export default ServiceCard;
