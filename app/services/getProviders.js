import { httpAxios } from "../helper/httpAxios";

export async function GetProviders() {
  const response = await httpAxios
    .post("/api/get-providers")
    .then((result) => result.data);

  return response;
}

// to find single provider based on their id
export async function GetSingleProvider(id) {
  const response = await httpAxios
    .post("/api/get-providers/provider", { providerId: Number(id) })
    .then((result) => result.data);

  return response;
}
