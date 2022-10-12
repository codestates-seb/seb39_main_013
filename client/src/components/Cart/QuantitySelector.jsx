/* eslint-disable react/prop-types */
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";

import { FiMinus, FiPlus } from "react-icons/fi";

export default memo(function QuantitySelector(props) {
  const [quantity, setQuantity] = useState(props.productQuantity);

  useEffect(() => {
    props.setQuantity(quantity);
  }),
    [quantity];

  const quantityPlusHandler = () => {
    quantity < props.maxQuantity ? setQuantity((prev) => prev + 1) : null;
  };
  const quantityMinusHandler = () => {
    quantity > 1 ? setQuantity((prev) => prev - 1) : null;
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
});

const Container = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
  svg {
    stroke-width: 3;
  }
`;
