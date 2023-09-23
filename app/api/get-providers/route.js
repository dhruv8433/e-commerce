import { NextResponse } from "next/server";
import homeProvider from "./json/home-provider.json";
import laundryProvider from "./json/laundry-provider.json";
import fullProvider from "./json/full-provider.json";
import barberProvider from "./json/barber-provider.json";
import electricProvider from "./json/electric-provider.json";
import pestControlProvider from "./json/pest-control-provider.json";
import plumbingProvider from "./json/plumbing-provider.json";
import kitchenProvider from "./json/kitchen-provider.json";
import carProvider from "./json/car-provider.json";

export async function POST(request) {
  return NextResponse.json(
    {
      success: true,
      message: `Providers Fetchign Success`,
      data: [
        homeProvider,
        laundryProvider,
        fullProvider,
        barberProvider,
        electricProvider,
        pestControlProvider,
        plumbingProvider,
        kitchenProvider,
        carProvider,
      ],
    },
    {
      status: 200,
    }
  );
}
