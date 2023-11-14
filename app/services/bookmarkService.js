import { httpAxios } from "../helper/httpAxios";

export async function addToBookmark(data, token) {
  const response = await httpAxios
    .post("api/add-bookmark", { data: data, token: token })
    .then((response) => response.data);

  return response;
}
