/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { memo } from "react";
import styled from "styled-components";
import { tablet } from "../../utils/styleTheme";
import ColorSelector from "../ProductRegister/ColorSelector";
import CategorySelector from "./CategorySelector";
import PriceRange from "./PriceRange";

export default memo(function ShopFilter(props) {
  const setParamsHandler = (e) => {
    if (e.name === "price") {
      props.setParams((prev) => {
        return {
          ...prev,
          minPrice: Number(e.value.priceMin),
          maxPrice: Number(e.value.priceMax),
        };
      });
    } else {
      props.setParams((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }
  };

  return (
    <Container>
      <CategorySelector changeHandler={setParamsHandler} />
      <ColorSelector
        colorList={props.dummyColor}
        fontSize={"22px"}
        changeHandler={setParamsHandler}
        name={"color"}
      />
      <PriceSelector>
        <p>Price</p>
        <PriceRange changeHander={setParamsHandler} />
      </PriceSelector>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media ${tablet} {
    padding: 28px 0;
  }
`;

const PriceSelector = styled.div`
  p {
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 22px;
  }
`;
