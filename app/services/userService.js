import { httpAxios } from "../helper/httpAxios";

export async function userService(userData) {
  const result = await httpAxios
    .post("api/manage-user", userData)
    .then((response) => response.data);

  return result;
}
