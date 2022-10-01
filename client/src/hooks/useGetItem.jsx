import { useQuery } from "react-query";
import { getProductOne } from "../api";

export default function useGetItem(id) {
  const { data, isLoading } = useQuery(
    ["getItems", id],
    () => getProductOne(id),
    {
      // enabled: false,
      retry: 1,
      staleTime: Infinity,
      onSuccess: (data) => {
        console.log("query success :", data);
      },
    }
  );
  return { data, isLoading };
}