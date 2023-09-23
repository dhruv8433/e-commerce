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
import homeProvider from "../json/home-provider.json";
import laundryProvider from "../json/laundry-provider.json";
import fullProvider from "../json/full-provider.json";
import barberProvider from "../json/barber-provider.json";
import electricProvider from "../json/electric-provider.json";
import pestControlProvider from "../json/pest-control-provider.json";
import plumbingProvider from "../json/plumbing-provider.json";
import kitchenProvider from "../json/kitchen-provider.json";
import carProvider from "../json/car-provider.json";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { providerId } = await request.json();

  if (providersId.includes(providerId)) {
    if (providerId === homeId) {
      return NextResponse.json(homeProvider);
    }
    if (providerId === laundryId) {
      return NextResponse.json(laundryProvider);
    }
    if (providerId === fullServiceId) {
      return NextResponse.json(fullProvider);
    }
    if (providerId === newBarberId) {
      return NextResponse.json(barberProvider);
    }
    if (providerId === electricId) {
      return NextResponse.json(electricProvider);
    }
    if (providerId === pestControlId) {
      return NextResponse.json(pestControlProvider);
    }
    if (providerId === plumbingId) {
      return NextResponse.json(plumbingProvider);
    }
    if (providerId === kitchenExprertId) {
      return NextResponse.json(kitchenProvider);
    }
    if (providerId === carProviderId) {
      return NextResponse.json(carProvider);
    }
  } else {
    return NextResponse.json({
      success: false,
      message: "Provider doesn't exist",
    });
  }
}
