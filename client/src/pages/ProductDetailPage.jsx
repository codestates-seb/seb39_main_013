/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProductDetailForm from "../components/ProductDetail/ProductDetailForm";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useGetItem from "../hooks/useGetItem";
import Loading from "../components/Commons/Loading";

export default function ProductDetailPage() {
  const params = useParams();
  const getItem = useGetItem(params.id);

  if (getItem.isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <ProductDetailForm dataInfo={getItem.data} />
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  justify-content: center;
`;
