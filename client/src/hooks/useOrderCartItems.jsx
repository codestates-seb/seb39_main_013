/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { axiosInstance } from "../api/axiosInstance";
import { paymentClickHandler } from "../api/payment";
import { queryClient } from "../utils/queryClient";
import useModal from "./useModal";
import React from "react";

export default function useOrderCartItems(payment, productData, mode) {
  const { openModal } = useModal();

  const orderCartItems = async (body) => {
    const token = Cookies.get("authorization");
    const res = await axiosInstance
      .post("/api/v2/orders/cart", body, {
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
        queryClient.refetchQueries(["getCartData"]);
      });

    return res;
  };

  const { mutate, isLoading } = useMutation(
    () => paymentClickHandler(payment, productData, mode, orderCartItems),
    {
      retry: false,
    }
  );

  return { mutate, isLoading };
}
