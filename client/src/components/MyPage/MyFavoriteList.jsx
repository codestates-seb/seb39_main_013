/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import useGetFavoriteItem from "../../hooks/useGetFavoriteItem";
import Loading from "../Commons/Loading";
import styled from "styled-components";
import ItemCard from "../Commons/ItemCard";
import NoItems from "../Commons/NoItems";

export default function MyFavoriteList() {
  const getFavoriteData = useGetFavoriteItem();

  useEffect(() => {
    getFavoriteData.refetch();
  }, []);

  if (getFavoriteData.isLoading) {
    return <Loading />;
  }

  if (getFavoriteData.isSuccess && !getFavoriteData.data.length) {
    return <NoItems shopLink={true} />;
  }

  return (
    <Container>
      {getFavoriteData?.data?.map((v) => {
        return (
          <ItemCard
            key={v.product.product_id}
            id={v.product.product_id}
            productImg={v.product.thumb_images[0]}
            brand={v.product.brand_name}
            title={v.product.name}
            price={v.product.price}
            favorite={true}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.section`
  margin-top: 48px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.mode === "main" ? "repeat(4, 1fr)" : "repeat(3, 1fr)"};
  grid-column-gap: 40px;
  grid-row-gap: 64px;
  place-items: center;
  width: 100%;
  max-width: 1280px;

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }
`;
