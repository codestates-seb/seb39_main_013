import { authAxios, axiosInstance } from "./axiosInstance";
import Cookie from "js-cookie";

export const signUpFn = async (payload) => {
  const res = await axiosInstance.post("/api/v1/members", payload);
  return res.data;
};

export const loginFn = async (payload) => {
  const res = await axiosInstance.post("/login", payload);

  if (res?.headers) {
    Cookie.set("authorization", res.headers["authorization"]);
  }
  console.log("inner Index :", res);
  return res;
};

export const oauthLoginFn = async () => {
  const res = await axiosInstance.get(
    "http://ec2-43-200-81-43.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google"
  );
  
  return res;
};

export const authorizeToken = async () => {
  console.log("on Auth");
  const token = Cookie.get("authorization");
  console.log('token :', token);
  const res = await authAxios.get("/api/v1/members/user", {
    headers: {
      authorization: token
    }
  });
  console.log('res :', res);
  return res;
};

export const imageRegisterFn = async (formData) => {
  const res = axiosInstance.post("/upload", formData, { 
    headers: {
      "Content-Type": "multipart/form-data"
    }
   });

   return res;
}

export const productRegisterFn = async (registerInfo) => {
    const res = await axiosInstance.post('/api/v1/products', registerInfo);
    return res;
} 

export const getProductItems = async () => {
  const res = await axiosInstance.get('/api/v1/products?page=0&pageSize=40&brandName=Stussy');
  return res;
}

export const getProductOne = async (id) => {
  const res = await axiosInstance.get(`/api/v1/products/${id}`);
  return res.data.data;
}