import { axiosInstance } from "./axiosInstance";
import Cookie from "js-cookie";
import { queryClient } from "../utils/queryClient";


export const signUpFn = async (payload) => {
  const res = await axiosInstance.post("/api/v1/members", payload);
  return res.data;
};

export const loginFn = async (payload) => {
  const res = await axiosInstance.post("/login", payload);
  console.log(res);
  if (res?.headers) {
    Cookie.set("authorization", res.headers["authorization"]);
  }
  console.log("inner Index :", res);
  return res;
};



export const authorizeToken = async () => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.get("/api/v1/members/user", {
    headers: {
      Authorization: token,
    },
  });
  console.log("res :", res);
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

export const getProductItems = async (params) => {
  const res = await axiosInstance.get(`/api/v1/products`, {
    params: { ...params },
  });
  return res.data;
};

export const getProductOne = async (id) => {
  const res = await axiosInstance.get(`/api/v1/products/${id}`);
  return res.data.data;
};

export const addCartItem = async (body) => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.post('/api/v1/carts', body, {
    headers: {
      Authorization: token,
    }
  });
  
  return res; 
}

export const deleteCartItem = async (id) => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.delete(`/api/v1/carts/${id}`, {
    headers: {
      Authorization: token
    }
  });
  return res;
}

export const addFavoriteItem = async (id) => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.post('/api/v1/bookmarks', id, {
    headers: {
      Authorization: token
    }
  });
  return res;
}

export const getCartData = async () => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.get('/api/v1/carts', {
    headers: {
      Authorization: token
    }
  })

  return res.data.data;
}

export const getFavoriteItem = async () => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.get('/api/v1/bookmarks', {
    headers: {
      Authorization: token
    }
  })

  return res.data.data;
}

export const getProductDetailInfo = async (params) => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.get('/api/v1/products/', {
    headers: {
      Authorization: token,
      params: params
    }
  });
  return res;
}

export const deleteFavoriteItem = async (id) => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.delete(`/api/v1/bookmarks/${id}`, {
    headers: {
      Authorization: token,
    }
  });
  return res;
} 

export const orderCartItems = async (body) => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.post('/api/v1/orders/cart', body, {
    headers: {
      Authorization: token,
    }
  }).then(() => {queryClient.refetchQueries(["getCartData"])});
  return res;
}

export const getOrderList = async () => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.get('/api/v1/orders/info', {
    headers: {
      Authorization: token,
    }
  });
  return res.data.data;
}