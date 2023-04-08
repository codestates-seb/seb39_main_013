import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../api/axiosInstance";

const deleteCartItem = async (id) => {
  const token = Cookies.get("authorization");
  const res = await axiosInstance.delete(`/api/v1/carts/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

export default function useDeleteCartData(id, setFunction) {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess } = useMutation(
    () => deleteCartItem(id),
    {
      retry: false,
      onSuccess: () => {
        queryClient.refetchQueries(["getCartData"]);
        setFunction(0);
      },
    }
  );

  return { mutate, isLoading, isSuccess };
}
