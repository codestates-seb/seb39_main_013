/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";

import { FiMinus, FiPlus } from "react-icons/fi";

export default function QuantitySelector(props) {
  const [quantity, setQuantity] = useState(props.productQuantity);

  const quantityPlusHandler = () => {
    quantity <= 999 ? setQuantity((prev) => prev + 1) : null;
  };
  const quantityMinusHandler = () => {
    quantity > 0 ? setQuantity((prev) => prev - 1) : null;
  };

  return (
    <Container>
      <button onClick={quantityMinusHandler}>
        <FiMinus />
      </button>
      <span>{quantity}</span>
      <button onClick={quantityPlusHandler}>
        <FiPlus />
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #ececec;
  padding: 4px 8px;
  color: #878787;
  font-size: 14px;

  button {
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
