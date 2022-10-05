/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import QuantitySelector from "../Cart/QuantitySelector";
import SizeSelector from "./SizeSelector";

export default function OrderFormBody(props) {
  return (
    <Container>
      <SizeWrapper>
        <span>SIZE</span>
        <SizeSelector setSize={props.setSize} size={props.sizeList} />
      </SizeWrapper>
      <SubWrapper>
        <div>
          <span>Color</span>
          <ColorBox color={props.color} />
        </div>
        <div>
          <span>Quantity</span>
          <QuantitySelector
            setQuantity={props.setQuantity}
            productQuantity={1}
            maxQuantity={props.maxQuantity}
          />
        </div>
      </SubWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 16px;

  span {
    font-size: 1rem;
    color: #878787;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  /* gap: 160px; */

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 32px;
`;

const ColorBox = styled.div`
  width: 18px;
  height: 18px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border: ${(props) => (props.checked ? "3px solid #2D7DF4" : "none")};
  border-radius: ${(props) => (props.checked ? "2px" : "none")};
  transition: 0.04s;
  background-color: ${(props) => props.color || "#fff"};
`;

const SizeWrapper = styled.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid #d4d4d4;
`;
