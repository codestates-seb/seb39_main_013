import { axiosInstance } from "./axiosInstance";
import Cookie from "js-cookie";
import { queryClient } from "../utils/queryClient";


export const signUpFn = async (payload) => {
  const res = await axiosInstance.post("/api/v1/members", payload);
  return res.data;
};

export const loginFn = async (payload) => {
  const res = await axiosInstance.post("/login", payload);
  if (res?.headers) {
    Cookie.set("authorization", res.headers["authorization"]);
  }

  return res;
};



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
  const res = await axiosInstance.get(`/api/v1/products/?name=${params.name}`);
  return res.data.data;
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
  console.log(res);
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

export const patchUserInfo = async (body, id) => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.patch(`/api/v1/members/${id}`, body, {
    headers: {
      Authorization: token,
    }
  });
  return res;
}

export const getUserData = async (id) => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.get(`/api/v1/members/${id}`, {
    headers: {
      Authorization: token,
    }
  });
  return res;
}

export const orderPoductItem = async (body) => {
  const token = Cookie.get("authorization");
  const res = await axiosInstance.post('/api/v1/orders/product', body, {
    headers: {
      Authorization: token,
    }
  });
  return res;
}

export const getProductItems = async (param) => {
  const res = await axiosInstance.get(`/api/v1/products`, {
    params: param,
  });
  return res.data;
};