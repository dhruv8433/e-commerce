import { dbConnect } from "@/app/database/db";
import { BookmarkModel } from "@/app/model/bookmarkModel";
import { NextResponse } from "next/server";

dbConnect();

// toggle bookmark
export async function POST(request) {
  const { providerData, token } = await request.json();

  try {
    // Check if the bookmark already exists for the given token and providerData
    const existingBookmark = await BookmarkModel.findOne({
      token,
      data: providerData,
    });

    if (existingBookmark) {
      // Bookmark exists, delete it
      await BookmarkModel.deleteOne({ token: token, data: providerData });
      return NextResponse.json({
        success: true,
        message: "Bookmark deleted successfully",
      });
    } else {
      // Bookmark doesn't exist, add it
      const bookmark = new BookmarkModel({ data: providerData, token });
      const bookmarkedData = await bookmark.save();
      return NextResponse.json({
        success: true,
        message: "Bookmark added successfully",
        data: bookmarkedData,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: error,
    });
  }
}
