import { dbConnect } from "@/app/database/db";
import { contactModelExist } from "@/app/model/contactModel";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request) {
  const { name, email, message } = await request.json();

  console.log("outside");
  try {
    console.log("inside try");

    // we are passing data to our service modle to store in table
    const contactModel = new contactModelExist({
      name: name,
      email: email,
      message: message,
    });

    // here we are waiting until data saved in table
    const contact = await contactModel.save();

    // we return that data here
    return NextResponse.json(contact);
  } catch (error) {
    // if any kind of error occure than we log that error here
    console.log(error);
    return NextResponse.json(
      {
        message: "Something went wrong",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
