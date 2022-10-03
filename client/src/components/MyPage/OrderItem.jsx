/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function OrderItem(props) {
  return (
    <>
      {props.products.map((v) => {
        return (
          <Container key={v.order_product_id}>
            <ItemProfile>
              <Link to={`/detail/${v.product_id}`}>
                <ItemTextWrapper>
                  <span>product Title</span>
                </ItemTextWrapper>
              </Link>
            </ItemProfile>
            <ItemOptions>
              <OptionWrapper>
                <div>
                  <span>{v.product_quantity} 개</span>
                  <span>{v.product_size} size</span>
                </div>
              </OptionWrapper>
            </ItemOptions>
            <OrderStatus>
              <span>{v.product_order_status}</span>
            </OrderStatus>
          </Container>
        );
      })}
    </>
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
  flex-direction: column;
  font-size: 1rem;
  color: #525252;
  gap: 4px;

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

const OrderStatus = styled.div`
  flex: 0.8;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  justify-content: space-between;
`;
