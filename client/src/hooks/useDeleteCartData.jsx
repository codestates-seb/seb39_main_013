import { useMutation, useQueryClient } from "react-query";
import { deleteCartItem } from "../api";

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
