import { NextResponse } from "next/server";
import { providersId } from "@/app/config/config";
import { serviceModel } from "@/app/model/serviceModel";
import { dbConnect } from "@/app/database/db";

dbConnect();

export async function POST(request) {
  const { id } = await request.json(); // Extract the 'id' parameter from the URL

  let services = [];
  if (providersId.includes(id)) {
    try {
      services = await serviceModel.find();
    } catch (error) {}
  } else {
    return NextResponse.json({
      success: false,
      message: "Provider not exist",
    });
  }

  return NextResponse.json(services)
}
