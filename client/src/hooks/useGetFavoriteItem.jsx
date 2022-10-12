import { useQuery } from "react-query";
import { getFavoriteItem } from "../api";

export default function useGetFavoriteItem() {
  const { data, isLoading, refetch, isSuccess } = useQuery(
    ["getFavoriteData"],
    getFavoriteItem,
    {
      retry: 2,
      enabled: false,
    }
  );

  return { data, isLoading, refetch, isSuccess };
}
