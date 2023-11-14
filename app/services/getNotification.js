import { httpAxios } from "../helper/httpAxios";

// to getting particular user's notifications based on token
export async function GetNotification(token) {
  const notification = await httpAxios
    .post("api/get-notification", { token: token })
    .then((response) => response.data);

  return notification;
}
