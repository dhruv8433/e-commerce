import { homeService } from "./services/homeService";

// async function to get data from our api
export async function getHomeScreen() {
  try {
    const response = await homeService();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(`Something Went Wrong To Fetching Home Screen`);
  }
}
