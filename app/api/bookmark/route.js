import { NextResponse } from "next/server";

export async function POST(request) {
  const items = await request.json();

  let bookmarkItems = [];
  bookmarkItems.push(items);
  return NextResponse.json(
    {
      success: true,
      message: "bookmark success",
      data: bookmarkItems,
    },
    {
      status: 200,
    }
  );
}
