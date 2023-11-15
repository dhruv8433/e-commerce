import { httpAxios } from "../helper/httpAxios";

// getting token from redux store and delete account
export async function DeleteAccountService(token) {
  const resposne = await httpAxios
    .post("api/delete-account", { token: token })
    .then((response) => response.data);

  return resposne;
}
