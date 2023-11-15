import { httpAxios } from "../helper/httpAxios";

export async function UpdateUserService(name, address, token) {
  const userData = await httpAxios
    .post("api/update-user", {
      name: name,
      address: address,
      token: token,
    })
    .then((response) => response.data);

  return userData;
}
