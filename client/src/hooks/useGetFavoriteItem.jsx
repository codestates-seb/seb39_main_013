import { useQuery } from "react-query";
import { getFavoriteItem } from "../api";
import { persistor } from "../redux/store";

export default function useGetFavoriteItem() {
  const { data, isLoading, refetch, isSuccess } = useQuery(
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

  return { data, isLoading, refetch, isSuccess };
}
