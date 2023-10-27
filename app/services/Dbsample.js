import { httpAxios } from "../helper/httpAxios";

export async function SampleDataBase() {
  const response = await httpAxios
    .post("/api/sample")
    .then((result) => result.data);

  return response;
}
