import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    if (email === "admin@gmail.com" && password === "123") {
      return NextResponse.json({
        success: true,
        message: `Welcome Back Admin`,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: `Unauthorized`,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
