import { useMutation } from "react-query";
import { paymentClickHandler } from "../api/payment";

export default function useOrderCartItems(payment, productData) {
  const { mutate } = useMutation(
    () => paymentClickHandler(payment, productData),
    {
      retry: false,
      onSuccess: (data) => console.log(data),
    }
  );

  return { mutate };
}
