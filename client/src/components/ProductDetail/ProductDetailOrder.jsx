/* eslint-disable react/prop-types */
import React from "react";
import OrderFormBody from "./OrderFormBody";
import OrderFormFooter from "./OrderFormFooter";
import OrderFormHeader from "./OrderFormHeader";
import styled from "styled-components";

export default function ProductDetailOrder(props) {
  return (
    <Container>
      <OrderFormHeader
        title={props.title}
        price={props.price}
        subTitle={props.subTitle}
      />
      <OrderFormBody sizeList={props.option.size} color={props.option.color} />
      <OrderFormFooter />
    </Container>
  );
}

const Container = styled.div`
  padding: 32px 24px;
`;
