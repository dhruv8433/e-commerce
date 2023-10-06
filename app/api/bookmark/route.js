import { NextResponse } from "next/server";

export async function POST(request) {
  const items = await request.json();

  let bookmarkItems = [];
  //we have to create add, delete and also get book mark api
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
