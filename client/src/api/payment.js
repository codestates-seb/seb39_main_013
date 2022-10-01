export const paymentClickHandler = () => {
  const data = {
    pg: "kakaopay",
    pay_method: "card",
    merchant_uid: `mid_${new Date().getTime()}`,
    name: "stateMall-payment",
    amount: 100,
    buyer_email: "eju2003@gmail.com",
    buyer_name: "이재형",
    buyer_tel: "010-3764-8371",
    buyer_addr: "서울특별시 강남구 신사동",
    buyer_postcode: "15815",
  };
  const IMP = window.IMP;
  IMP.init("imp15788743");

  const reqPayment = (res) => {
    const { success, error_msg } = res;

    if (success) {
      console.log(res);
    } else {
      console.log("payment Error!!!" + error_msg);
    }
  };
  window.IMP?.request_pay(data, reqPayment);
};
