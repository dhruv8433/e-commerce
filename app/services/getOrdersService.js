import { httpAxios } from "../helper/httpAxios";

// to getting order of users
export async function GetOrdersService(token) {
  const response = await httpAxios
    .post("api/get-orders", { userToken: token })
    .then((services) => services.data);
  return response;
}
