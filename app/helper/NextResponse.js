import { NextResponse } from "next/server";

export default function httpNextResponse(success, message, status) {
  return NextResponse.json(
    {
      success: success,
      message: message,
    },
    {
      status: status,
    }
  );
}
