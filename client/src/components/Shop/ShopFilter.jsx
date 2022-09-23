/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import Button from "../Commons/Button";
import ColorSelector from "../ProductRegister/ColorSelector";
import CategorySelector from "./CategorySelector";

export default function ShopFilter(props) {
  return (
    <Container>
      <CategorySelector />
      <ColorSelector
        colorList={props.dummyColor}
        fontSize={"22px"}
        setColorHandler={props.setColorHandler}
      />
      <PriceSelector>
        <p>Price</p>
        <InputWrapper>
          <input type="text" placeholder="Min" />
          <span>to</span>
          <input type="text" placeholder="Max" />
        </InputWrapper>
        <Button mode={"apply"}>Apply</Button>
      </PriceSelector>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const PriceSelector = styled.div`
  p {
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 22px;
  }
`;

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
`;
