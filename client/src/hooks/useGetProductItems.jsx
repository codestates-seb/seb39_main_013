import { useQuery } from "react-query";
import { getProductItems } from "../api";

export default function useGetProductItems(params) {
  const { data, isLoading } = useQuery(
    ["getItems", params],
    () => getProductItems(params),
    {
      // enabled: false,
      retry: 1,
      staleTime: 0,
      onSuccess: (data) => {
        console.log("query success :", data);
      },
    }
  );

  return { data, isLoading };
}
