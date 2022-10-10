/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { getProductItems } from "../api";

export default function useGetProductItems(params, setFunction) {
  const { data, isLoading, isSuccess, isError } = useQuery(
    ["getItems", params],
    () => getProductItems(params),
    {
      retry: 1,
      staleTime: 1000 * 60 * 30,
      onSuccess: () => {
        setFunction(true);
        setTimeout(() => {
          setFunction(false);
        }, 1200);
      },
    }
  );

  return { data, isLoading, isSuccess, isError };
}
