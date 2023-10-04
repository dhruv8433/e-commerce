import { NextResponse } from "next/server";

export async function POST(request) {
  return NextResponse.json(
    {
      success: true,
      message: "bookmark success",
    },
    {
      status: 200,
    }
  );
}
