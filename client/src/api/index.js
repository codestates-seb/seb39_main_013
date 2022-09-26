import { axiosInstance } from "./axiosInstance";

export const signUpFn = axiosInstance.post(
  "http://43.200.81.43:8080/api/v1/members",
  {}
);
