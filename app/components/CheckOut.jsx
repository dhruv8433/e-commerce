// StripeCheckoutButton.js

import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrderService } from "../services/placeOrderService";
import { celarCart } from "../action/action";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // Stripe wants the price in cents
  const items = useSelector((state) => state.cart.cartItems);
  let userToken = useSelector((state) => state.isAuthenticate.user.token);
  const dispatch = useDispatch();

  // on successful payment
  const onToken = (token) => {
    console.log(token); // You can send the token to your server for processing
    console.log("order of ", items);
    toast.success("order success");
    // clear the cart
    dispatch(celarCart());
    const data = placeOrderService(userToken, items);
    console.log(data);
  };

  const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY;

  return (
    <StripeCheckout
      key={""}
      label="Pay Now"
      name="eRequirement"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={process.env.NEXT_PUBLIC_KEY}
    />
  );
};

export default StripeCheckoutButton;
