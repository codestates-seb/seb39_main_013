import { useQuery } from "react-query";
import { getCartData } from "../api";
// import React from "react";

export default function useGetCartDataQuery(setFunction) {
  const { data, isLoading, isError, refetch, isSuccess } = useQuery(
    ["getCartData"],
    getCartData,
    {
      retry: 2,
      onSuccess: () => {
        setFunction(true);
        setTimeout(() => {
          setFunction(false);
        }, 1200);
      },
    }
  );

  return { data, isLoading, isError, refetch, isSuccess };
}
