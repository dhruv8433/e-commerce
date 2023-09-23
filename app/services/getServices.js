import { httpAxios } from "../helper/httpAxios";

export async function getService(id) {
  const respone = await httpAxios
    //   here we need only one paramer "id" and default it passed as "string" so we need to convert into "number"
    .post(`/api/get-services/provider`, { id: Number(id) })
    .then((result) => result.data);

  return respone;
}
