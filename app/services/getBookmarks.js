import { httpAxios } from "../helper/httpAxios";

export async function GetBookmarks(token) {
  const response = await httpAxios
    .post("api/get-bookmarks", { token: token })
    .then((response) => response.data);

  return response;
}
