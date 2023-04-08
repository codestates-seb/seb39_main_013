import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { axiosInstance } from "../api/axiosInstance";
import { paymentClickHandler } from "../api/payment";
import useModal from "./useModal";

export default function useOrderProductItem(payment, productData, mode) {
  const { openModal } = useModal();
  const orderProductItem = async (body) => {
    const token = Cookies.get("authorization");
    const res = await axiosInstance
      .post("/api/v2/orders/product", body, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        openModal({
          type: "cartModal",
          props: {
            text: "주문이 완료되었습니다.",
          },
        });
      });
    return res;
  };

  const { mutate, data, isLoading } = useMutation(
    () => paymentClickHandler(payment, productData, mode, orderProductItem),
    {
      retry: false,
    }
  );

  return { mutate, data, isLoading };
}
