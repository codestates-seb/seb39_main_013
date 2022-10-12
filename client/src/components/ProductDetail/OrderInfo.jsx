/* eslint-disable react/prop-types */
import React, { memo } from "react";
import styled from "styled-components";
import Price from "../Commons/Price";
import { FaWonSign } from "react-icons/fa";

export default memo(function OrderInfo(props) {
  return (
    <Container>
      <div>
        <InfoTag>OPTIONS</InfoTag>
        <span>{props.size}</span>
      </div>
      <div>
        <InfoTag>TOTAL PRICE</InfoTag>
        <TotalPriceWrapper>
          <FaWonSign />
          <Price price={props.totalPrice} />
        </TotalPriceWrapper>
      </div>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  padding: 1rem 0;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 1rem;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    span {
      &:nth-child(2) {
        font-weight: 600;
        font-size: 20px;
      }
    }
  }
`;

const InfoTag = styled.span`
  font-size: 1rem;
  color: #878787;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
