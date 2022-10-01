import { useMutation } from "react-query";
import { addFavoriteItem } from "../api";

export default function useAddFavoriteItem(id) {
  const { mutate, isLoading } = useMutation(() => addFavoriteItem(id), {
    retry: false,
    onSuccess: (data) => console.log(data),
  });

  return { mutate, isLoading };
}
