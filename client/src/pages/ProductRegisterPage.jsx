import React from "react";
import styled from "styled-components";
import ProductRegisterForm from "../components/ProductRegister/ProductRegisterForm";

export default function ProductRegisterPage() {
  return (
    <Container>
      <ProductRegisterForm />
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  justify-content: center;
`;
