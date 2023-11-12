import { dbConnect } from "@/app/database/db";
import { placeOrder } from "@/app/model/placeOrderModel";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request) {
  try {
    const orders = await placeOrder.find();
    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error: error });
  }
}
