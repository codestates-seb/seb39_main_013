/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "react-query";
import { orderCartItems } from "../api";
import { paymentClickHandler } from "../api/payment";

export default function useOrderCartItems(payment, productData) {
  const { mutate, data, isLoading } = useMutation(
    () => paymentClickHandler(payment, productData),
    {
      retry: false,
    }
  );

  return { mutate, data, isLoading };
}
