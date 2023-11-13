import { dbConnect } from "@/app/database/db";
import { notificationModel } from "@/app/model/notificationModel";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request) {
  const { token, type, message, details } = await request.json();

  try {
    const notification = new notificationModel({
      token: token,
      type: type,
      message: message,
      details: details,
    }); 
    const saveNotification = await notification.save();
    return NextResponse.json(saveNotification);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: error,
    });
  }
}
