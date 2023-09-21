import httpNextResponse from "@/app/helper/NextResponse";
import { userModel } from "@/app/model/userModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    // Find the user by email
    const user = await userModel.findOne({ email });

    if (!user) {
      // User not found
      return httpNextResponse(false, "User not Exist", 404);
    }

    if (password === user.password) {
      return NextResponse.json(
        {
          success: true,
          message: "User Login Success",
          token: user.token,
        },
        {
          status: 200,
        }
      );
    } else {
      return httpNextResponse(false, "unauthorized", 401);
    }
  } catch (error) {
    console.error("Error while querying the database:", error);
    return httpNextResponse(false, "Internal Server Error", 500);
  }
}
