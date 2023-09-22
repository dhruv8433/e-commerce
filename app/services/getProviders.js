import { httpAxios } from "../helper/httpAxios";

export async function GetProviders() {
  const response = await httpAxios
    .post("/api/get-providers")
    .then((result) => result.data);

  return response;
}
