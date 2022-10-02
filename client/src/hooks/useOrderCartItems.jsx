/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { orderCartItems } from "../api";
import { paymentClickHandler } from "../api/payment";
import { queryClient } from "../utils/queryClient";

export default function useOrderCartItems(payment, productData) {
  const [resData, setResData] = useState([]);
  const [body, setBody] = useState({});

  useEffect(() => {
    resData &&
      setBody({
        buyer_address: resData.buyer_addr,
        buyer_name: resData.buyer_name,
        buyer_tel: resData.buyer_tel,
        buyer_postcode: resData.buyer_postcode,
        merchant_uid: resData.merchant_uid,
        products: productData?.map((v) => {
          return {
            product_id: v.product.product_id,
            quantity: v.productQuantity,
            price: v.product.price,
            size: v.product.size,
            color: v.product.color,
          };
        }),
      });
  }, [resData, productData]);

  const api = () => {
    paymentClickHandler(payment, productData, setResData);
    return resData;
  };

  const { mutate, data, isLoading } = useMutation(() => orderCartItems(body), {
    retry: false,
    onSuccess: () => queryClient.refetchQueries(["getCartData"]),
  });

  return { mutate, data, isLoading, api };
}
