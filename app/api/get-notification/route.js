import { dbConnect } from "@/app/database/db";
import { notificationModel } from "@/app/model/notificationModel";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request) {
  try {
    const notifications = await notificationModel.find();
    return NextResponse.json(notifications);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: error,
    });
  }
}
