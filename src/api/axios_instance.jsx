import axios from "axios";

const BASE_URL = "https://postive.tata.kg/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  "Content-Type": "application/json",
});
