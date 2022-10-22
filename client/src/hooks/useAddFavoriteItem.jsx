import { useMutation, useQueryClient } from "react-query";
import { addFavoriteItem } from "../api";

export default function useAddFavoriteItem(id) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(() => addFavoriteItem(id), {
    retry: false,
    onSuccess: () => {
      return queryClient.refetchQueries(["getFavoriteData"]);
    },
  });

  return { mutate, isLoading };
}
