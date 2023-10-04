import { NextResponse } from "next/server";

export default function POST(request) {
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
