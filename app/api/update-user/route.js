import { dbConnect } from "@/app/database/db";
import { userModel } from "@/app/model/userModel";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request) {
  const { name, address, token } = await request.json();

  try {
    // Build the update object based on the provided fields
    const updateObject = {};
    if (name !== undefined) {
      updateObject.name = name;
    }
    if (address !== undefined) {
      updateObject.address = address;
    }

    // we find user based on id and set what we want to set
    const userData = await userModel.findOneAndUpdate(
      { token: token },
      { $set: updateObject },
      { new: true } // To get the updated document in the response
    );

    console.log(userData);
    return NextResponse.json({
      success: true,
      message: "User update success",
      data: userData,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
