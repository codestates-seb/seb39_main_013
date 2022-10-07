import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getOrderList } from "../api";

export default function useGetOrderList() {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(["getOrderList"], getOrderList, {
    retry: false,
    onError: () => navigate("/*"),
  });

  return { data, isLoading };
}
