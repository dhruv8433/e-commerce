import { NextResponse } from "next/server";
import { dbConnect } from "@/app/database/db";
import { ProviderModel } from "@/app/model/providerModel";

dbConnect();

export async function POST(request) {
  const { providerId } = await request.json();

  try {
    const providers = await ProviderModel.find({ id: providerId });
    return NextResponse.json(providers);
  } catch (error) {
    console.log(error);
  }
}
