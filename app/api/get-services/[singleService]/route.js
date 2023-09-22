import { NextResponse } from "next/server";
import {
  carProviderId,
  electricId,
  fullServiceId,
  homeId,
  kitchenExprertId,
  laundryId,
  newBarberId,
  pestControlId,
  plumbingId,
  providersId,
} from "@/app/config/config";

// json file based in their id's
import homeResponse from "./json/home-cleaner.json";
import laundryCleaner from "./json/laundry-cleaner.json";
import fullService from "./json/full-service-cleaner.json";
import newBarber from "./json/new-barber.json";
import electric from "./json/electric.json";
import pestControl from "./json/pest-control.json";
import plumbing from "./json/plumbing.json";
import kitchenExprert from "./json/kitchen-expert.json";
import carProvider from "./json/car-provider.json";

export async function POST(request) {
  const { id } = await request.json(); // Extract the 'id' parameter from the URL

  if (providersId.includes(id)) {
    if (id === homeId) {
      return NextResponse.json(homeResponse);
    }
    if (id === laundryId) {
      return NextResponse.json(laundryCleaner);
    }
    if (id === fullServiceId) {
      return NextResponse.json(fullService);
    }
    if (id === newBarberId) {
      return NextResponse.json(newBarber);
    }
    if (id === electricId) {
      return NextResponse.json(electric);
    }
    if (id === pestControlId) {
      return NextResponse.json(pestControl);
    }
    if (id === plumbingId) {
      return NextResponse.json(plumbing);
    }
    if (id === kitchenExprertId) {
      return NextResponse.json(kitchenExprert);
    }
    if (id === carProviderId) {
      return NextResponse.json(carProvider);
    }
  } else {
    return NextResponse.json({
      success: false,
      message: "Provider not exist",
    });
  }
}
