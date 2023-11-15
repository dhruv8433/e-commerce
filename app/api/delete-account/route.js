import { dbConnect } from "@/app/database/db";
import { userModel } from "@/app/model/userModel";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request) {
  const { token } = await request.json();

  try {
    const deleteAccount = await userModel.deleteOne({ token });
    console.log(deleteAccount);
    return NextResponse.json({
      success: true,
      message: "Account Deleted Success",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: error,
    });
  }
}
