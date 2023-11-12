import { providersId } from "@/app/config/config";
import { NextResponse } from "next/server";
import { dbConnect } from "@/app/database/db";
import { ProviderModel } from "@/app/model/providerModel";

dbConnect();

export async function POST(request) {
  const { providerId } = await request.json();

  const providers = ProviderModel.find();
  if (providersId.includes(providerId)) {
    if (providerId == providers.id) {
      return NextResponse.json(providers);
    }
  }
}
