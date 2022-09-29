/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { HiOutlineX } from "react-icons/hi";
import { FaWonSign } from "react-icons/fa";
import Button from "../Commons/Button";
import Price from "../Commons/Price";
import { cartData } from "../../constance";

export default function CartForm() {
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <Container>
      <FormHeader>
        <MenuBox>PRODUCT NAME</MenuBox>
        <MenuBox>OPTION</MenuBox>
        <MenuBox>TOTAL</MenuBox>
      </FormHeader>
      <FormBody>
        {cartData.map((v) => {
          return (
            <CartItem
              key={v.id}
              id={v.id}
              itemImg={v.productImg}
              brandName={v.brand}
              itemTitle={v.title}
              option={v.option}
              price={v.price}
              maxQuantity={v.quantity}
              setTotalPrice={setTotalPrice}
            />
          );
        })}
      </FormBody>
      <FormFooter>
        <button>
          <HiOutlineX />
          Clear Shopping Cart
        </button>
        <SubTotal>
          <span>Subtotal</span>
          <span>
            <FaWonSign />
            <Price price={totalPrice} />
          </span>
        </SubTotal>
      </FormFooter>
      <Button>ORDER NOW</Button>
    </Container>
  );
}

/**
 * flex로 정가운데 고정 시 max-width width 100%로 전체 공간 잡기
 */

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
  justify-content: space-between;
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
