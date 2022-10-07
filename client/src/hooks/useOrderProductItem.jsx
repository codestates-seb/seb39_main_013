import { useMutation } from "react-query";
import { paymentClickHandler } from "../api/payment";

export default function useOrderProductItem(payment, productData, mode) {
  const { mutate, data, isLoading } = useMutation(
    () => paymentClickHandler(payment, productData, mode),
    {
      retry: false,
    }
  );

  return { mutate, data, isLoading };
}
