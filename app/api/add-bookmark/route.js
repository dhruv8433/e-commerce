import { dbConnect } from "@/app/database/db";
import { BookmarkModel } from "@/app/model/bookmarkModel";
import { NextResponse } from "next/server";

dbConnect();

export async function POST(request) {
  const { providerData, token } = await request.json();

  try {
    const bookmark = await BookmarkModel({ data: providerData, token: token });
    const bookmarkedData = bookmark.save();
    return NextResponse.json(bookmarkedData);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: error,
    });
  }
}
