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
import { useSelector } from "react-redux";
import { memo } from "react";
import useOrderProductItem from "../../hooks/useOrderProductItem";
import { useNavigate, useParams } from "react-router-dom";
import useModal from "../../hooks/useModal";
import useGetItem from "../../hooks/useGetItem";

export default memo(function ProductDetailOrder() {
  const params = useParams();
  const getItem = useGetItem(params.id);
  const userInfo = useSelector((state) => state.user);
  const [quantity, setQuantity] = useState();
  const [size, setSize] = useState(0);
  const [totalPrice, setTotalPrice] = useState({});
  const [paymentData, setPaymentData] = useState({});
  const [sizeId, setSizeId] = useState(getItem.data.product_items[0]);
  const [toLogin, setToLogin] = useState(false);

  useEffect(() => {
    setTotalPrice(Number(quantity) * Number(getItem.data.price));
  }, [getItem.data, quantity]);

  useEffect(() => {
    const setId = getItem.data.product_items.filter((v) => v.size === size)[0];
    if (setId) {
      setSizeId(setId);
    }
  }, [size]);

  useEffect(() => {
    if (toLogin) {
      navigate("/login");
    }
  }, [toLogin]);

  const navigate = useNavigate();
  const { openModal } = useModal();

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
    productId: sizeId.productItemId,
    productQuantity: quantity,
    isWanted: true,
  });

  const orderProductAction = useOrderProductItem(
    paymentData,
    [{ ...getItem.data, quantity, totalPrice, size }],
    "product"
  );

  const addCartItemHandler = (e) => {
    e.preventDefault();
    openModal({
      type: "orderModal",
      props: {
        text: "상품을 카트에 추가하시겠습니까?",
        img: getItem.data.thumb_images[0],
        action: addCartAction,
        setState: setToLogin,
      },
    });
  };

  const orderProductHandler = (e) => {
    e.preventDefault();
    openModal({
      type: "orderModal",
      props: {
        text: "상품을 주문하시겠습니까?",
        img: getItem.data.thumb_images[0],
        action: orderProductAction,
        setState: setToLogin,
      },
    });
  };

  if (addCartAction.isLoading || orderProductAction.isLoading) {
    return;
  }

  return (
    <Container>
      <OrderFormHeader
        title={getItem.data.name}
        price={getItem.data.price}
        subTitle={getItem.data.brand_name}
      />
      <OrderFormBody
        setSize={setSize}
        setQuantity={setQuantity}
        sizeList={getItem.data.product_items}
        color={getItem.data.color}
        maxQuantity={sizeId.stock}
      />
      <OrderFormFooter />
      <OrderInfo totalPrice={totalPrice} size={size} />
      <ButtonWrapper>
        <Button disable={true} onClick={addCartItemHandler}>
          ADD TO CART
        </Button>
        <Button disable={true} mode="apply" onClick={orderProductHandler}>
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
