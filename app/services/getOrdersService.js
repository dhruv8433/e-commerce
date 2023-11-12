import { httpAxios } from "../helper/httpAxios";

// to getting order of users
export async function GetOrdersService() {
  const response = await httpAxios
    .post("api/get-orders")
    .then((services) => services.data);
  return response;
}
