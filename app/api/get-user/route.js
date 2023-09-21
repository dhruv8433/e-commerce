import { userModel } from "@/app/model/userModel";
import { NextResponse } from "next/server";

// fetching all users
export async function POST(request) {
  let user = [];
  try {
    user = await userModel.find();
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: `unable to fetching users`,
    });
  }
  return NextResponse.json(user);
}
