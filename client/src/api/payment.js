/* eslint-disable no-unused-vars */
import { useQueryClient } from "react-query";
import { orderCartItems } from ".";

export const paymentClickHandler = (data, productInfo, setData) => {
  const IMP = window.IMP;
  IMP.init("imp15788743");

  const reqPayment = (res) => {
    const { success, error_msg } = res;
    if (success) {
      setData(res);
    } else {
      console.log("payment Error!!!" + error_msg);
    }
  };
  window.IMP?.request_pay(data, reqPayment);
};

