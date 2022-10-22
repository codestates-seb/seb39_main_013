/* eslint-disable no-unused-vars */
import { orderCartItems, orderPoductItem } from ".";

export const paymentClickHandler = (data, productInfo, mode) => {
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
            "product_id" : mode === 'cart' ? v.product.product_id : v.product_id,
            "quantity" : mode === 'cart' ? v.productQuantity : v.quantity,
            "product_name": mode === 'cart' ? v.product.name : v.name,
            "price" : mode === 'cart' ? v.product.price : v.totalPrice,
            "size" : mode === 'cart' ? v.product.size : v.size,
            "color" : mode === 'cart' ? v.product.color : v.color
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

