/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "react-query";
import { addCartItem } from "../api";

export default function useAddCartMutaion(body) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(() => addCartItem(body), {
    retry: false,
    onSuccess: (data) => {
      queryClient.refetchQueries(["getCartData"]);
    },
  });

  return { mutate, isLoading };
}
