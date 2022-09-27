import { axiosInstance } from "./axiosInstance";
import Cookie from "js-cookie";

export const signUpFn = async (payload) => {
  const res = await axiosInstance.post("/api/v1/members", payload);
  return res.data;
};

export const loginFn = async (payload) => {
  const res = await axiosInstance.post("/login", payload);

  if (res?.headers) {
    Cookie.set("access_token", res.headers["authorization"]);
  }
  console.log("inner Index :", res);
  return res;
};

export const oauthLoginFn = async () => {
  const res = await axiosInstance.get(
    "http://ec2-43-200-81-43.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google"
  );
  console.log("oath :", res);
  return res;
};
