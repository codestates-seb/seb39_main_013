import { useQuery } from "react-query";
import { axiosInstance } from "../api/axiosInstance";

const getSerchItems = (params) => {
  const res = axiosInstance.get(`/api/v2/products`, {
    params: {
      page: 1,
      pageSize: 30,
      name: params,
    },
  });

  return res;
};
export default function useSearch(keyword) {
  const { data, isLoading, refetch } = useQuery(
    ["getSearchItem", keyword],
    () => getSerchItems(keyword),
    {
      retry: false,
      enabled: false,
      select: (data) => {
        return data.data.data;
      },
    }
  );

  return { data, isLoading, refetch };
}
