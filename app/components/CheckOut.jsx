// StripeCheckoutButton.js

import React from "react";
import toast from "react-hot-toast";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // Stripe wants the price in cents

  const onToken = (token) => {
    console.log(token); // You can send the token to your server for processing
    toast.success("order success");
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
