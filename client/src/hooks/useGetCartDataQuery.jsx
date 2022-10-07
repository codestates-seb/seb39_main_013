import { useQuery } from "react-query";
import { getCartData } from "../api";
// import React from "react";
import { useNavigate } from "react-router-dom";

export default function useGetCartDataQuery() {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(["getCartData"], getCartData, {
    retry: 1,
    onError: () => navigate("/*"),
  });

  return { data, isLoading };
}
