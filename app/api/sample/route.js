// import { ProviderModel } from "@/app/model/providerModel";
import { ProviderModelExist } from "@/app/model/providerModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  let providers = [];
  try {
    // lean is used for only read data
    providers = await ProviderModelExist.find();
  } catch (error) {
    console.log("Something went wrong", error);
    return NextResponse.json({
      success: false,
    });
  }
  return NextResponse.json(providers);
}
