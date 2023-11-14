import { dbConnect } from "@/app/database/db";
import { BookmarkModel } from "@/app/model/bookmarkModel";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request) {
  const { token } = await request.json();
  let bookmarkedData = [];

  try {
    bookmarkedData = await BookmarkModel.find({ token });
    return NextResponse.json(bookmarkedData);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: error,
    });
  }
}
