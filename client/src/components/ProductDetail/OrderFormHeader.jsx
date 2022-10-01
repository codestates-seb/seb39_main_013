/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { FaWonSign } from "react-icons/fa";
import Price from "../Commons/Price";

export default function OrderFormHeader(props) {
  return (
    <Container>
      <TitleBox>
        <h2>{props.title}</h2>
        <span>{props.subTitle}</span>
      </TitleBox>
      <PriceBox>
        <FaWonSign />
        <Price price={props.price} />
      </PriceBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid #d4d4d4;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #525252;
  }

  span {
    color: #707070;
    font-size: 1rem;
  }
`;

const PriceBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  span {
    font-size: 20px;
    font-weight: 700;
  }

  svg {
    margin-bottom: 4px;
  }
`;
