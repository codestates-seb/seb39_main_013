import { useQuery } from "react-query";
import { getFavoriteItem } from "../api";

export default function useGetFavoriteItem() {
  const { data, isLoading } = useQuery(["getFavoriteData"], getFavoriteItem, {
    retry: 1,
    onSuccess: (data) => console.log("favorite :", data),
  });

  return { data, isLoading };
}
