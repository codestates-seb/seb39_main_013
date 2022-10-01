import { useQuery } from "react-query";
import { getCartData } from "../api";

export default function useGetCartDataQuery() {
  const { data, isLoading } = useQuery(["getCartData"], getCartData, {
    retry: 1,
    onSuccess: (data) => console.log(data),
  });

  return { data, isLoading };
}
