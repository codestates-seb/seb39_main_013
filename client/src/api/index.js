import { axiosInstance } from "./axiosInstance";

export const signUpFn = async (payload) => {
  const res = await axiosInstance.post(
    "/api/v1/members", payload
  )
  return res.data;
};

export const loginFn = async (payload) => {
  const res = await axiosInstance.post("/login", payload)
  return res;
}
