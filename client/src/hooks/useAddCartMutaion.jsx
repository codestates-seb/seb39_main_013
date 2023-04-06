import { useMutation, useQueryClient } from "react-query";
import { addCartItem } from "../api";

export default function useAddCartMutaion(body) {
  const queryClient = useQueryClient();
  console.log('inner hooks :', body)
  const { mutate, isLoading } = useMutation(() => addCartItem(body), {
    retry: false,
    onSuccess: () => queryClient.invalidateQueries(["getCartData"]),
  });

  return { mutate, isLoading };
}
