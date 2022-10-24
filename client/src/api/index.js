import { axiosInstance } from "./axiosInstance";
import Cookie from "js-cookie";

export const authorizeToken = async () => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.get("/api/v1/members/user", {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

export const imageRegisterFn = async (formData) => {
  const res = axiosInstance.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res;
};

export const productRegisterFn = async (registerInfo) => {
  const res = await axiosInstance.post("/api/v1/products", registerInfo);
  return res;
};

export const deleteCartItem = async (id) => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.delete(`/api/v1/carts/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

export const getCartData = async () => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.get("/api/v1/carts", {
    headers: {
      Authorization: token,
    },
  });

  return res.data.data;
};

export const deleteFavoriteItem = async (id) => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.delete(`/api/v1/bookmarks/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

export const getOrderList = async () => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.get("/api/v1/orders/info", {
    headers: {
      Authorization: token,
    },
  });
  return res.data.data;
};

export const patchUserInfo = async (body, id) => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.patch(`/api/v1/members/${id}`, body, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

export const getUserData = async (id) => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.get(`/api/v1/members/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};
