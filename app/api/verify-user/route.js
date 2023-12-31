import { dbConnect } from "@/app/database/db";
import httpNextResponse from "@/app/helper/NextResponse";
import { userModel } from "@/app/model/userModel";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    // Find the user by email
    const user = await userModel.findOne({ email });

    if (!user) {
      // User not found
      return NextResponse.json({
        success: false,
        message: "User not exist",
      });
    }

    if (password === user.password) {
      return NextResponse.json(
        {
          success: true,
          message: "User Login Success",
          token: user.token,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json({
        success: false,
        message: "unauthorized! Wrong Password",
      });
    }
  } catch (error) {
    console.error("Error while querying the database:", error);
    return httpNextResponse(false, "Internal Server Error", 500);
  }
}
