import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getProductDetailInfo } from "../api";

export default function useGetProductDetailInfo(params) {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(
    ["getProductDetailInfo", params],
    () => getProductDetailInfo(params),
    {
      retry: 1,
      onError: () => navigate("/*"),
    }
  );

  return { data, isLoading };
}
