/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { axiosInstance } from "../api/axiosInstance";
import { queryClient } from "../utils/queryClient";

const addCartItem = async (body) => {
  const token = Cookies.get("authorization");
  const res = await axiosInstance.post("/api/v1/carts", body, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

export default function useAddCartMutaion(body) {
<<<<<<< HEAD
  const queryClient = useQueryClient();
  console.log('inner hooks :', body)
=======
>>>>>>> bf90e35b06cccc99b8f6e4980c55a8f2b218f322
  const { mutate, isLoading } = useMutation(() => addCartItem(body), {
    retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries(["getCartData"]);
    },
  });

  return { mutate, isLoading };
}
