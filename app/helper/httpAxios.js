import axios from "axios";

// export const httpAxios = axios.create({
//   // production live url
//   baseURL: "https://e-requirement-odudy69yq-dhruv8433.vercel.app",
// });
// here we create a httpaxios for our website base url
export const httpAxios = axios.create({
  //  localhost live
  //   baseURL: "http://localhost:8000",
  // baseURL: "http://localhost:8000",
  baseURL: "https://e-requirement.vercel.app/",
});
