import { useQuery } from "react-query";
import { getProductOne } from "../api";

export default function useGetItem(id) {
  const { data, isLoading } = useQuery(
    ["getItems", id],
    () => getProductOne(id),
    {
      retry: 1,
      staleTime: 1000 * 60 * 30,
    }
  );
  return { data, isLoading };
}
