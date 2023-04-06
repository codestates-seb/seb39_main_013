/* eslint-disable no-unused-vars */
import { orderCartItems, orderPoductItem } from ".";

export const paymentClickHandler = (data, productInfo, mode) => {
  const IMP = window.IMP;
  IMP.init("imp15788743");
  const reqPayment = (res) => {
    const { success, error_msg } = res;
    if (success) {
      const body = {
        buyerAddress : res.buyer_addr,
        buyerName : res.buyer_name,
        buyerTel : res.buyer_tel,
        buyerPostcode : res.buyer_postcode,
        merchantUid : res.merchant_uid,
        products : productInfo.map(v => {
          return {
            "productId" : mode === 'cart' ? v.productId : v.productId,
            "quantity" : mode === 'cart' ? 1 : 1,
            "productName": mode === 'cart' ? v.name : v.name,
            "price" : mode === 'cart' ? v.price : v.totalPrice,
            "size" : mode === 'cart' ? v.size : v.size,
            "color" : mode === 'cart' ? v.color : v.color
          }
        })
      }
      if(mode === 'cart') {
        orderCartItems(body);
      }else if(mode === 'product') {
        orderPoductItem(body);
      }
    }else {
      console.log("payment Error!!!" + error_msg);
    }
  };
  window.IMP?.request_pay(data, reqPayment);
};

