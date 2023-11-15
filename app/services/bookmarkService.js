import { httpAxios } from "../helper/httpAxios";

export async function BookmarkService(data, token) {
  const response = await httpAxios
    .post("api/bookmark", { providerData: data, token: token })
    .then((response) => response.data);

  return response;
}
