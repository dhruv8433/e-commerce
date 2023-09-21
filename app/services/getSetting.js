import { httpAxios } from "../helper/httpAxios";

export async function getSettings() {
  const response = await httpAxios
    .post("/api/get-settings")
    .then((result) => result.data);

  return response;
}
