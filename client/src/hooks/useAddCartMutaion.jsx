import { useMutation, useQueryClient } from "react-query";
import { addCartItem } from "../api";

export default function useAddCartMutaion(body) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(() => addCartItem(body), {
    retry: false,
    onSuccess: () => queryClient.invalidateQueries(["getCartData"]),
  });

  return { mutate, isLoading };
}
