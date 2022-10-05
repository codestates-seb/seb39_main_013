/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import { getProductItems } from "../api";

export default function useGetProductItems(params) {
  const { data, isLoading, isSuccess } = useQuery(
    ["getItems", params],
    () => getProductItems(params),
    {
      retry: 1,
    }
  );

  return { data, isLoading, isSuccess };
}
