/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Price from "../Commons/Price";

export default function PaymentItem(props) {
  return (
    <Container>
      <ItemProfile>
        <Link to={`/detail/${props.products[0].product_id}`}>
          <ItemTextWrapper multi={props.products.length > 1 ? true : false}>
            <span>{props.products[0].product_name}</span>
          </ItemTextWrapper>
        </Link>
      </ItemProfile>
      <ItemOptions>
        <OptionWrapper>
          <div>
            <span>{props.address}</span>
          </div>
        </OptionWrapper>
      </ItemOptions>
      <OrderNumber>
        <span>{props.orderNum}</span>
      </OrderNumber>
      <TotalPrice>
        <Price price={props.totalPrice} />
      </TotalPrice>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d4d4d4;
  padding: 24px 0;
`;

const ItemProfile = styled.div`
  flex: 2;
  width: 100%;
  display: flex;
  justify-content: space-between;
  svg {
    fill: #656565;
  }

  a {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 24px;
    font-size: 1rem;
    color: #525252;
    font-weight: 600;
  }
`;

const ItemTextWrapper = styled.div`
  display: flex;
  font-size: 1rem;
  color: #525252;
  gap: 4px;

  ${(props) =>
    props.multi &&
    css`
      &::after {
        content: " 외";
      }
    `}

  span {
    font-weight: 600;
    &:nth-child(2) {
      font-weight: normal;
      font-size: 14px;
      color: #707070;
    }
  }
`;

const ItemOptions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const OptionWrapper = styled.div`
  display: flex;
  max-width: 180px;
  gap: 1rem;
  justify-content: space-between;
  border-bottom: ${(props) => props.border === "bottom" && "1px solid #d4d4d4"};

  padding: ${(props) =>
    props.border === "bottom" ? "0 0 1rem 0" : "1rem 0 0 0"};
  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;

    span {
      font-size: 14px;
    }
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 14px;
    svg {
      fill: #656565;
    }
  }
`;

const TotalPrice = styled.div`
  flex: 0.8;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  justify-content: space-between;
`;

const OrderNumber = styled.div`
  flex: 1;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  justify-content: space-between;
`;
