import httpNextResponse from "@/app/helper/NextResponse";
import { userModel } from "@/app/model/userModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    // guest user for testing purpos
    if (email === "guestuser@gmail.com" && password === "12345") {
      return NextResponse.json({
        success: true,
        message: "Guest user login success",
        token: "cjbtrbyrpgybhnvjHIBIijbhVUovhuVHUOhuvhuvVHUGVGvvUHVgvGGVBhOGK",
        user: "Guest User",
        email: "guestuser@gmail.com",
        mobile: 1234567890,
        address: "abc area, abc city",
      });
    }

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
          user: user.name,
          email: user.email,
          mobile: user.phone,
          address: user.address,
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
