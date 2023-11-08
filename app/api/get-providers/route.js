import { dbConnect } from "@/app/database/db";
import { ProviderModel } from "@/app/model/providerModel";
import { NextResponse } from "next/server";

dbConnect();

// fetching all providerss
export async function POST(request) {
  let providers = [];
  try {
    providers = await ProviderModel.find();
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: `unable to fetching Providers`,
    });
  }
  return NextResponse.json(providers);
}
