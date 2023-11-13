import { httpAxios } from "../helper/httpAxios";

// to getting particular user's notifications based on token
export async function GetNotification() {
  const notification = await httpAxios
    .post("api/get-notification")
    .then((response) => response.data);

  return notification;
}
