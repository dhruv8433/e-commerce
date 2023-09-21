import { userModel } from "@/app/model/userModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  // we are fetching data from user using json
  const { email, password, phone, name, address } = await request.json();

  try {
    // try to store data in userModel
    const response = new userModel({
      email: email,
      password: password,
      phone: phone,
      name: name,
      address: address,
      token: jwt.sign({ phone: phone }, "klrtmkbgmrkynjrnyjonkrtmbkmhntmk"),
    });

    // wait until user data got stored
    const result = await response.save();

    // return response that data is stored
    return NextResponse.json(result);
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
  }
}
