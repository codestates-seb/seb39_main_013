/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { FaWonSign } from "react-icons/fa";
import Button from "../Commons/Button";
import Price from "../Commons/Price";
import useGetCartDataQuery from "../../hooks/useGetCartDataQuery";
import { memo } from "react";
import { useSelector } from "react-redux";
import useOrderCartItems from "../../hooks/useOrderCartItems";
import ErrorPage from "../Commons/ErrorPage";
import CartItemSkeleton from "./CartItemSkeleton";
import NoItems from "../Commons/NoItems";

export default memo(function CartForm() {
  const [totalPrice, setTotalPrice] = useState({});
  const [calcPrice, setCalcPrice] = useState(0);
  const [paymentData, setPaymentData] = useState({});
  const [onLoading, setOnLoading] = useState(false);
  const userInfo = useSelector((state) => state.user);
  const getCartData = useGetCartDataQuery(setOnLoading);
  const orderCartAction = useOrderCartItems(
    paymentData,
    getCartData.data,
    "cart"
  );

  useEffect(() => {
    if (getCartData?.data?.length === 0) {
      setCalcPrice(0);
      return;
    }

    setCalcPrice(
      Number(Object.values(totalPrice).reduce((a, c) => (a += c), 0))
    );
  }, [totalPrice, getCartData.data]);

  useEffect(() => {
    setPaymentData({
      pg: "kakaopay",
      pay_method: "card",
      merchant_uid: `mid_${new Date().getTime()}`,
      name: "stateMall-payment",
      amount: calcPrice,
      buyer_email: userInfo.email,
      buyer_name: userInfo.name,
      buyer_tel: userInfo.phone,
      buyer_addr: userInfo.address,
      buyer_postcode: userInfo.postcode,
    });
  }, [totalPrice, calcPrice, userInfo]);

  const clickHander = () => {
    orderCartAction.mutate();
  };

  if (getCartData.isError) {
    return (
      <ErrorPage
        errorText={"Network Error"}
        retryAction={getCartData.refetch}
      />
    );
  }

  if (getCartData?.data?.length === 0) {
    return <NoItems shopLink={true} />;
  }

  return (
    <Container>
      <FormHeader>
        <MenuBox>PRODUCT NAME</MenuBox>
        <MenuBox>OPTION</MenuBox>
        <MenuBox>TOTAL</MenuBox>
      </FormHeader>
      <FormBody>
        {getCartData.isLoading || onLoading ? (
          <CartItemSkeleton size={3} />
        ) : (
          getCartData?.data.map((v) => {
            return (
              <CartItem
                key={v.cartId}
                id={v.productItemId}
                itemImg={v.thumbImages[0]}
                price={v.price}
                maxQuantity={v.stock}
                brandName={v.brandName}
                itemTitle={v.name}
                size={v.size}
                setTotalPrice={setTotalPrice}
                cartId={v.cartId}
              />
            );
          })
        )}
      </FormBody>
      <FormFooter>
        <SubTotal>
          <span>Subtotal</span>
          <span>
            <FaWonSign />
            <Price price={calcPrice} />
          </span>
        </SubTotal>
      </FormFooter>
      <Button disable={getCartData?.data?.length} onClick={clickHander}>
        ORDER NOW
      </Button>
    </Container>
  );
});

const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-top: 64px;
`;

const FormHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d4d4d4;
  font-size: 14px;
`;

const MenuBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: 600;

  &:nth-child(1) {
    flex: 2;
  }

  &:last-child {
    flex: 0.8;
  }
`;

const FormBody = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const FormFooter = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 40px;

  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const SubTotal = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 14px;
    font-weight: 600;
    color: #525252;

    &:last-child {
      font-size: 20px;
      font-weight: 600;
    }

    svg {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
  }
`;
