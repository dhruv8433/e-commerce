import { dbConnect } from "@/app/database/db";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request) {
  const requestData = await request.json();

  // Assuming requestData is an object with 'token' and 'items' properties
  const { token, items } = requestData;

  // handle if no token 
  if (!token) {
    return NextResponse.json(
      {
        success: false,
        message: "token must required",
      },
      { status: 500 }
    );
  }

  // handle if no items 
  if (!items) {
    return NextResponse.json(
      {
        success: false,
        message: "please add some item",
      },
      { status: 500 }
    );
  }

  // crete and array of cart
  let cart = [];
  cart.push(items);

  return NextResponse.json({
    success: true,
    message: "item added to cart",
    token: token,
    cart: cart,
  });
}
