import { axiosInstance } from "@api/axios_instance";

export const registerReq = (data) => {
  return axiosInstance.post("api/v1/register", data);
};
