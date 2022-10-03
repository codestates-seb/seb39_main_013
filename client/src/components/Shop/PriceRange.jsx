/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Commons/Button";

/**
 *
 * @fix apply 시 두 params 동시 적용 필요
 *
 */

export default function PriceRange(props) {
  const [price, setPrice] = useState({
    priceMin: 0,
    priceMax: 10000000,
  });

  const inputChangeHandler = (e) => {
    setPrice((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const applyPriceHandler = () => {
    props.changeHander({
      name: "price",
      value: price,
    });
  };

  return (
    <>
      <InputWrapper>
        <input
          name={"priceMin"}
          type={"number"}
          placeholder="Min"
          onChange={(e) => inputChangeHandler(e)}
        />
        <span>to</span>
        <input
          name={"priceMax"}
          type={"number"}
          placeholder="Max"
          onChange={(e) => inputChangeHandler(e)}
        />
      </InputWrapper>
      <Button disable={true} mode={"apply"} onClick={applyPriceHandler}>
        Apply
      </Button>
    </>
  );
}

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;

  input {
    font-weight: 600;
    width: 100%;
    border: 2px solid #e5e8eb;
    border-radius: 10px;
    height: 40px;
    padding: 0 8px;
    outline: none;

    &:focus {
      border-color: #77b7f6;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
