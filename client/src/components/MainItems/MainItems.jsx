/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useGetFavoriteItem from "../../hooks/useGetFavoriteItem";
import useGetProductItems from "../../hooks/useGetProductItems";
import { desktop, mobile, tablet } from "../../utils/styleTheme";
import ItemCard from "../Commons/ItemCard";
import Loading from "../Commons/Loading";
import NoItems from "../Commons/NoItems";

// eslint-disable-next-line
function MainItems(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const userInfo = useSelector((state) => state.user);
  const getFavoriteData = useGetFavoriteItem();
  const getDataList = useGetProductItems(props.params);

  useEffect(() => {
    if (userInfo.isLogin && !getFavoriteData.isError) {
      getFavoriteData.refetch();
      setIsFavorite(true);
    }

    if (!userInfo.isLogin) {
      setIsFavorite(false);
    }
  }, [userInfo.isLogin, getFavoriteData.isError]);

  if (getDataList.isLoading || getFavoriteData.isLoading) {
    return <Loading active={true} />;
  }

  if (!getDataList.data.data.length) {
    return <NoItems />;
  }
  return (
    <Container mode={props.mode}>
      {getDataList?.data?.data.map((v) => {
        let favorite = false;
        const fa = getFavoriteData?.data?.map((v) => v.product.product_id);
        if (isFavorite && fa.includes(v.product_id)) {
          favorite = true;
        }

        return (
          <ItemCard
            key={v.product_id}
            id={v.product_id}
            productImg={v.thumb_images[0]}
            brand={v.brand_name}
            title={v.name}
            price={v.price}
            favorite={favorite}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.mode === "main" ? "repeat(4, 1fr)" : "repeat(3, 1fr)"};
  grid-column-gap: 40px;
  grid-row-gap: 64px;
  width: 100%;
  max-width: 1280px;

  @media ${desktop} {
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    grid-column-gap: 28px;
    grid-row-gap: 56px;
  }

  @media ${tablet} {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    grid-column-gap: 16px;
    grid-row-gap: 32px;
  }

  @media ${mobile} {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

export default MainItems;
