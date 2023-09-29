import axios from "axios";

// here we create a httpaxios for our website base url 
export const httpAxios = axios.create({
    baseURL: "http://localhost:8000/"
})