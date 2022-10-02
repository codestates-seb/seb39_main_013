import { useQuery } from "react-query";
import { getProductDetailInfo } from "../api";

export default function useGetProductDetailInfo(params) {
  const { data, isLoading } = useQuery(
    ["getProductDetailInfo"],
    () => getProductDetailInfo(params),
    {
      retry: 1,
    }
  );

  return { data, isLoading };
}
