import { useQuery } from "react-query";
import { getFavoriteItem } from "../api";

export default function useGetFavoriteItem() {
  const { data, isLoading, refetch } = useQuery(
    ["getFavoriteData"],
    getFavoriteItem,
    {
      retry: 1,
      enabled: false,
      onSuccess: (data) => console.log("favorite :", data),
      onError: (err) => console.log(err),
    }
  );

  return { data, isLoading, refetch };
}
