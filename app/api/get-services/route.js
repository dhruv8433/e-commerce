import { NextResponse } from "next/server";

// this file is based on providers and we can add many services all have one commone provider_id that matches with providers
export async function POST(request) {
  return NextResponse.json({
    success: true,
    message: `Service Fetching`,
  });
}
