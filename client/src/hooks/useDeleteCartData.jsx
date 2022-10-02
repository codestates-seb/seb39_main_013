import { useMutation, useQueryClient } from "react-query";
import { deleteCartItem } from "../api";

export default function useDeleteCartData(id) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(() => deleteCartItem(id), {
    retry: false,
    onSuccess: () => {
      queryClient.refetchQueries(["getCartData"]);
    },
  });

  return { mutate, isLoading };
}
