import { dbConnect } from "@/app/database/db";
import { placeOrder } from "@/app/model/placeOrderModel";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request) {
  // user id contain data of user and data contain all those orders
  const { userToken, data } = await request.json();
  try {
    const order = placeOrder({
      userToken: userToken,
      data: data,
    });
    console.log(order);

    const orderSuccess = await order.save();

    return NextResponse.json({
      message: "Order Success",
      data: orderSuccess,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "something went wrong",
      error: error,
    });
  }
}
