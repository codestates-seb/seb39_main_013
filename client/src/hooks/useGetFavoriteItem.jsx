import { useQuery } from "react-query";
import { getFavoriteItem } from "../api";
import { persistor } from "../redux/store";

export default function useGetFavoriteItem() {
  // const queryClient = useQueryClient();
  const { data, isLoading, refetch, isError } = useQuery(
    ["getFavoriteData"],
    getFavoriteItem,
    {
      retry: 1,
      enabled: false,
      onError: async (err) => {
        await persistor.purge();
        console.log(err);
      },
    }
  );

  return { data, isLoading, refetch, isError };
}
