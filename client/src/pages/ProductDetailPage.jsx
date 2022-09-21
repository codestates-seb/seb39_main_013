/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProductDetailForm from "../components/ProductDetail/ProductDetailForm";
import styled from "styled-components";

export default function ProductDetailPage() {
  return (
    <Container>
      <ProductDetailForm />
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  justify-content: center;
`;
