import { useMutation } from "react-query";
import { addCartItem } from "../api";

export default function useAddCartMutaion(body) {
  const { mutate, isLoading } = useMutation(() => addCartItem(body), {
    retry: false,
    onSuccess: (res) => console.log(res),
  });

  return { mutate, isLoading };
}
