/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import OrderFormBody from "./OrderFormBody";
import OrderFormFooter from "./OrderFormFooter";
import OrderFormHeader from "./OrderFormHeader";
import styled from "styled-components";
import Button from "../Commons/Button";
import { AiOutlineHeart } from "react-icons/ai";
import OrderInfo from "./OrderInfo";
import useAddCartMutaion from "../../hooks/useAddCartMutaion";
import Loading from "../Commons/Loading";

export default function ProductDetailOrder(props) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(0);

  const orderData = {
    totalPrice: Number(props.price) * Number(quantity),
    size,
    name: props.title,
    color: props.color,
  };

  const addCartAction = useAddCartMutaion({
    productId: props.id,
    productQuantity: quantity,
    isWanted: true,
  });

  const addCartItemHandler = (e) => {
    e.preventDefault();
    addCartAction.mutate();
  };

  if (addCartAction.isLoading) {
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
        sizeList={[props.size]}
        color={props.color}
        maxQuantity={props.maxQuantity}
      />
      <OrderFormFooter />
      <OrderInfo orderData={orderData} />
      <ButtonWrapper>
        <Button disable={true} onClick={addCartItemHandler}>
          ADD TO CART
        </Button>
        <Button disable={true} mode="apply">
          BUY NOW
        </Button>
        <button>
          <AiOutlineHeart width={24} height={24} />
        </button>
      </ButtonWrapper>
    </Container>
  );
}

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
    padding: 10px;

    &:nth-child(3) {
      flex: 0.3;
      border: 2px solid #878787;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
