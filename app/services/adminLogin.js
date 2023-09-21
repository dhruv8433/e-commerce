import { httpAxios } from "../helper/httpAxios";

export async function adminLogin(data) {
  const isAdminLogin = await httpAxios
    .post(`api/admin`, data)
    .then((response) => response.data);

  return isAdminLogin;
}
