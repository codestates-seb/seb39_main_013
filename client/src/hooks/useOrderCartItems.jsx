/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "react-query";
import { paymentClickHandler } from "../api/payment";

export default function useOrderCartItems(payment, productData) {
  const { mutate, isLoading } = useMutation(
    () => paymentClickHandler(payment, productData),
    {
      retry: false,
    }
  );

  return { mutate, isLoading };
}
