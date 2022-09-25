/* eslint-disable no-undef */
import React from "react";
import styled from "styled-components";
import CartForm from "../components/Cart/CartForm";
import SubBanner from "../components/SubBanner/Subbanner";

export default function CartPage() {
  return (
    <Container>
      <SubBanner
        imgUrl={`${process.env.PUBLIC_URL}/public/assets/images/cart_sub_banner.png`}
      />
      <CartForm />
    </Container>
  );
}

const Container = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
