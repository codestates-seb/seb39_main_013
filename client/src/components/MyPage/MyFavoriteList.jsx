import React, { useEffect } from "react";
import useGetFavoriteItem from "../../hooks/useGetFavoriteItem";
import Loading from "../Commons/Loading";
import styled from "styled-components";
import ItemCard from "../Commons/ItemCard";

export default function MyFavoriteList() {
  const getFavoriteData = useGetFavoriteItem();

  useEffect(() => {
    getFavoriteData.refetch();
  }, []);

  if (getFavoriteData.isLoading) {
    return <Loading />;
  }
  console.log(getFavoriteData.data);

  return (
    <Container>
      {getFavoriteData?.data?.map((v) => {
        console.log(v);
        return (
          <ItemCard
            key={v.product.product_id}
            id={v.product.product_id}
            productImg={v.product.thumb_images[0]}
            brand={v.product.brand_name}
            title={v.product.name}
            price={v.product.price}
            favorite={true}
            favoriteId={v.bookmarkId}
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

  /**  
  * props와 중첩되어도 우선순위로 적용가능
  */
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }
`;
