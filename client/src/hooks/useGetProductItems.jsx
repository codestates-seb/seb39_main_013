import { useQuery } from "react-query";
import { getProductItems } from "../api";

export default function useGetProductItems() {
  const { data, isLoading } = useQuery(["getItems"], getProductItems, {
    // enabled: false,
    retry: 1,
    staleTime: 0,
    onSuccess: (data) => {
      console.log("query success :", data);
    },
  });

  return { data, isLoading };
}
