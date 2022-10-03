import { useQuery } from "react-query";
import { getOrderList } from "../api";

export default function useGetOrderList() {
  const { data, isLoading } = useQuery(["getOrderList"], getOrderList, {
    retry: false,
  });

  return { data, isLoading };
}
