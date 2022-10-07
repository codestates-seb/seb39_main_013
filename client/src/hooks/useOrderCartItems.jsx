/* eslint-disable no-unused-vars */
import { useMutation } from "react-query";
import { paymentClickHandler } from "../api/payment";

export default function useOrderCartItems(payment, productData, mode) {
  const { mutate, isLoading } = useMutation(
    () => paymentClickHandler(payment, productData, mode),
    {
      retry: false,
    }
  );

  return { mutate, isLoading };
}
