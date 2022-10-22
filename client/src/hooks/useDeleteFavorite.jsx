import { useMutation, useQueryClient } from "react-query";
import { deleteFavoriteItem } from "../api";

export default function useDeleteFavorite(id) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(() => deleteFavoriteItem(id), {
    retry: false,
    onSuccess: () => {
      queryClient.refetchQueries(["getFavoriteData"]);
    },
  });
  return { mutate, isLoading };
}
