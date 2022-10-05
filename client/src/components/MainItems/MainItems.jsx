/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useGetFavoriteItem from "../../hooks/useGetFavoriteItem";
import useGetProductItems from "../../hooks/useGetProductItems";
import { desktop, mobile, tablet } from "../../utils/styleTheme";
import ItemCard from "../Commons/ItemCard";
import NoItems from "../Commons/NoItems";
import Skeleton from "../Commons/Skeleton";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

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

  const nextButtonClickHandler = () => {
    props.setPage((prev) => prev + 1);
  };

  const prevButtonClickHandler = () => {
    if (props.params.page === 1) {
      return;
    }
    props.setPage((prev) => prev - 1);
  };

  if (getDataList.isLoading || getFavoriteData.isLoading) {
    return (
      <Container mode={props.mode}>
        <Skeleton size={8} />
      </Container>
    );
  }

  if (getDataList.isSuccess && getDataList.data.length === 0) {
    return <NoItems />;
  }

  return (
    <>
      <Container mode={props.mode}>
        {getDataList.data.data.map((datas) => {
          let favorite = false;
          const fa = getFavoriteData?.data?.map((v) => v.product.product_id);
          if (isFavorite && fa.includes(datas.product_id)) {
            favorite = true;
          }
          return (
            <ItemCard
              key={datas.product_id}
              id={datas.product_id}
              productImg={datas.thumb_images[0]}
              brand={datas.brand_name}
              title={datas.name}
              price={datas.price}
              favorite={favorite}
              isLogin={userInfo.isLogin}
            />
          );
        })}
      </Container>
      <ButtonWrapper>
        <div>
          {props.params.page !== 1 && props.mode === "shop" && (
            <button className="button__prev" onClick={prevButtonClickHandler}>
              <MdArrowBackIosNew />
              <span>Prev</span>
            </button>
          )}
        </div>
        <div>
          {getDataList.data.data.length === props.params.pageSize &&
            props.mode === "shop" && (
              <button className="button__next" onClick={nextButtonClickHandler}>
                <span>Next</span>
                <MdArrowForwardIos />
              </button>
            )}
        </div>
      </ButtonWrapper>
    </>
  );
}

const Container = styled.section`
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

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 2rem;

  div {
    flex: 1;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #cdcdcd;
    background-color: transparent;
    border-radius: 10px;
    padding: 8px;
    width: 100%;
    max-width: 180px;
    font-size: 1rem;
    color: #2d7df4;
    gap: 8px;
    transition: 0.5s;

    svg {
      width: 34px;
      height: 34px;
      fill: #2d7df4;
    }

    &:hover {
      background-color: #2d7df4;
      color: white;
      border: 2px solid #2d7df4;
      svg {
        fill: white;
      }
    }
  }

  .button__prev {
    padding-right: 2rem;
  }

  .button__next {
    padding-left: 2rem;
  }
`;

export default MainItems;
