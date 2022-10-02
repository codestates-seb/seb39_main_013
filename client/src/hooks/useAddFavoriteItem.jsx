import { useMutation, useQueryClient } from "react-query";
import { addFavoriteItem } from "../api";

export default function useAddFavoriteItem(id) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(() => addFavoriteItem(id), {
    retry: false,
    onSuccess: () => {
      return queryClient.invalidateQueries(["getFavoriteData"]);
    },
  });

  return { mutate, isLoading };
}
