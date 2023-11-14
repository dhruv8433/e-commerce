import { dbConnect } from "@/app/database/db";
import { token } from "@/app/helper/userToken";
import { notificationModel } from "@/app/model/notificationModel";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request) {
  const { token } = await request.json();
  let notifications = [];
  try {
    notifications = await notificationModel.find({ token });
    return NextResponse.json(notifications)
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: error,
    });
  }
}
