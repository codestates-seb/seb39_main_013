import React from "react";
import styled from "styled-components";
import CartForm from "../components/Cart/CartForm";

export default function CartPage() {
  return (
    <Container>
      <CartForm />
    </Container>
  );
}

const Container = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
`;
