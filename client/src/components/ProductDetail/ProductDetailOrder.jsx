/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import OrderFormBody from "./OrderFormBody";
import OrderFormFooter from "./OrderFormFooter";
import OrderFormHeader from "./OrderFormHeader";
import styled from "styled-components";
import Button from "../Commons/Button";
import OrderInfo from "./OrderInfo";
import useAddCartMutaion from "../../hooks/useAddCartMutaion";
import Loading from "../Commons/Loading";
import { useSelector } from "react-redux";
import { memo } from "react";
import useOrderProductItem from "../../hooks/useOrderProductItem";

export default memo(function ProductDetailOrder(props) {
  const [quantity, setQuantity] = useState(props.size);
  const [size, setSize] = useState(0);
  const [totalPrice, setTotalPrice] = useState({});
  const [paymentData, setPaymentData] = useState({});

  const userInfo = useSelector((state) => state.user);
  useEffect(() => {
    setTotalPrice(Number(quantity) * Number(props.price));
  }, [props.price, quantity]);

  useEffect(() => {
    setPaymentData({
      pg: "kakaopay",
      pay_method: "card",
      merchant_uid: `mid_${new Date().getTime()}`,
      name: "stateMall-payment",
      amount: totalPrice,
      buyer_email: userInfo.email,
      buyer_name: userInfo.name,
      buyer_tel: userInfo.phone,
      buyer_addr: userInfo.address,
      buyer_postcode: userInfo.postcode,
    });
  }, [totalPrice, userInfo]);

  const addCartAction = useAddCartMutaion({
    productId: props.id,
    productQuantity: quantity,
    isWanted: true,
  });

  const orderProductAction = useOrderProductItem(
    paymentData,
    [{ ...props.data, quantity, totalPrice, size }],
    "product"
  );

  const addCartItemHandler = (e) => {
    e.preventDefault();
    addCartAction.mutate();
  };

  const orderProductHandler = (e) => {
    e.preventDefault();
    orderProductAction.mutate();
  };

  if (addCartAction.isLoading || orderProductAction.isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <OrderFormHeader
        title={props.title}
        price={props.price}
        subTitle={props.subTitle}
      />
      <OrderFormBody
        setSize={setSize}
        setQuantity={setQuantity}
        sizeList={props.sizeList.info}
        color={props.color}
        maxQuantity={props.maxQuantity}
      />
      <OrderFormFooter />
      <OrderInfo totalPrice={totalPrice} size={size} />
      <ButtonWrapper>
        <Button disable={userInfo.isLogin} onClick={addCartItemHandler}>
          ADD TO CART
        </Button>
        <Button
          disable={userInfo.isLogin}
          mode="apply"
          onClick={orderProductHandler}
        >
          BUY NOW
        </Button>
      </ButtonWrapper>
    </Container>
  );
});

const Container = styled.div`
  padding: 32px 24px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  button {
    border-radius: 10px;
    flex: 1;
    padding: 20px;

    &:hover {
      opacity: 0.7;
    }
  }
`;
