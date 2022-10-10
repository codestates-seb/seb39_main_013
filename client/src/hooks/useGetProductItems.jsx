/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import { getProductItems } from "../api";

export default function useGetProductItems(params, setFunction) {
  const { data, isLoading, isSuccess, isError, refetch } = useQuery(
    ["getItems", params],
    () => getProductItems(params),
    {
      retry: 2,
      staleTime: 1000 * 60 * 30,
      onSuccess: () => {
        setFunction(true);
        setTimeout(() => {
          setFunction(false);
        }, 1200);
      },
    }
  );

  return { data, isLoading, isSuccess, isError, refetch };
}
