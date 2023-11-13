import { httpAxios } from "../helper/httpAxios";

// based on what user can perfrom like place_order, cancle_order etc kind of notification recived
// those all messafe and details other stuff are stored in config file
export async function NotificationService(token, type, message, details) {
  const response = await httpAxios
    .post("api/notification", {
      token: token,
      type: type,
      message: message,
      details: details,
    })
    .then((response) => response.data);
  return response;
}
