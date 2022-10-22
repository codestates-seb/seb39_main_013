import { useQuery } from "react-query";
import { axiosInstance } from "../api/axiosInstance";

const getProductOne = async (id) => {
  const res = await axiosInstance.get(`/api/v2/products/info/list/${id}`);
  console.log("fetch!");
  return res.data.data;
};

export default function useGetItem(id) {
  const { data, isLoading } = useQuery(
    ["getItems", id],
    () => getProductOne(id),
    {
      retry: 1,
      staleTime: 1000 * 60 * 30,
    }
  );
  return { data, isLoading };
}
