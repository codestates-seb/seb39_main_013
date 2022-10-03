import { useQuery } from "react-query";
import { getProductItems } from "../api";

export default function useGetProductItems(params) {
  const { data, isLoading } = useQuery(
    ["getItems", params],
    () => getProductItems(params),
    {
      retry: 1,
      staleTime: 0,
    }
  );

  return { data, isLoading };
}
