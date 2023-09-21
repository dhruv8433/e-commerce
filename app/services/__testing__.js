import { httpAxios } from "../helper/httpAxios";

export async function TestingApi() {
  const result = await httpAxios
    .post("/api/get-home-screen")
    .then((response) => response.data);

  return result;
}
