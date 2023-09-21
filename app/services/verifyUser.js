import { httpAxios } from "../helper/httpAxios";

export async function verifyUser(userData) {
  const response = await httpAxios
    .post("/api/verify-user", userData)
    .then((result) => result.data);

  return response;
}
