import React from "react";
import ProductDetailForm from "../components/ProductDetail/ProductDetailForm";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useGetItem from "../hooks/useGetItem";
import DetailSkeleton from "../components/ProductDetail/DetailSkeleton";
import ErrorPage from "../components/Commons/ErrorPage";

export default function ProductDetailPage() {
  const params = useParams();
  const getItem = useGetItem(params.id);

  if (getItem.isError) {
    <ErrorPage errorText={"Network Error"} retryAction={getItem.refetch} />;
  }

  return (
    <Container>
      {getItem.isLoading ? (
        <DetailSkeleton />
      ) : (
        <ProductDetailForm dataInfo={getItem.data} />
      )}
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  width: 100%;
  justify-content: center;
`;
