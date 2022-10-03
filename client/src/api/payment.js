/* eslint-disable no-unused-vars */
import { useQueryClient } from "react-query";
import { orderCartItems } from ".";

export const paymentClickHandler = (data, productInfo) => {
  const IMP = window.IMP;
  IMP.init("imp15788743");

  const reqPayment = (res) => {
    const { success, error_msg } = res;
    if (success) {
      const body = {
        buyer_address : res.buyer_addr,
        buyer_name : res.buyer_name,
        buyer_tel : res.buyer_tel,
        buyer_postcode : res.buyer_postcode,
        merchant_uid : res.merchant_uid,
        products : productInfo.map(v => {
          return {
            "product_id" : v.product.product_id,
            "quantity" : v.productQuantity,
            "product_name": v.product.name,
            "price" : v.product.price,
            "size" : v.product.size,
            "color" : v.product.color
          }
        })
      } 
      orderCartItems(body);
    }else {
      console.log("payment Error!!!" + error_msg);
    }
  };
  window.IMP?.request_pay(data, reqPayment);
};

