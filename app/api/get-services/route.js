import { dbConnect } from "@/app/database/db";
import { serviceModel } from "@/app/model/serviceModel";
import { NextResponse } from "next/server";

dbConnect();

// this file is based on providers and we can add many services all have one commone provider_id that matches with providers
export async function POST(request) {
  let services = [];

  try {
    services = await serviceModel.find();
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json(services);
}
