/* eslint-disable no-unused-vars */

export const paymentClickHandler = (data, productInfo, mode, orderMethod) => {
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
            "productId" : mode === 'cart' ? v.productId : v.product_id,
            "quantity" : mode === 'cart' ? 1 : v.quantity,
            "productName": mode === 'cart' ? v.name : v.name,
            "price" : mode === 'cart' ? v.price : v.totalPrice,
            "size" : mode === 'cart' ? v.size : v.size,
            "color" : mode === 'cart' ? v.color : v.color
          }
        })
      }

      orderMethod(body);

    }else {
      console.log("payment Error!!!" + error_msg);
    }
  };
  window.IMP?.request_pay(data, reqPayment);
};