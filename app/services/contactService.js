import { httpAxios } from "../helper/httpAxios";

export async function contactService(formData) {
  const response = await httpAxios
    .post("/api/contact", formData)
    .then((response) => response.data);

    return response
}
