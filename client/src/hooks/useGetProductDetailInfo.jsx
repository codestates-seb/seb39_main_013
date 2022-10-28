import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/axiosInstance";

export const getProductDetailInfo = async (params) => {
  const res = await axiosInstance.get(`/api/v1/products/?name=${params.name}`);
  return res.data.data;
};

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
