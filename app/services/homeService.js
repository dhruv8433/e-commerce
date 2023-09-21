import { httpAxios } from "../helper/httpAxios";

export async function homeService() {
  const response = await httpAxios
    .post("api/get-home-screen")
    .then((result) => result.data);

  return response;
}
