import { dbConnect } from "@/app/database/db";
import { placeOrder } from "@/app/model/placeOrderModel";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request) {
  const { userToken } = await request.json();
  let orders = [];
  try {
    orders = await placeOrder.find({ userToken });
    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error: error });
  }
}
