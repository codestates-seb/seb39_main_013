/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import Category from "../components/Category/Category";
import CommentCategory from "../components/Commons/CommentCategory";
import Loading from "../components/Commons/Loading";
import MainBanner from "../components/Main/MainBanner";
import MainTextBanner from "../components/Main/MainTextBanner";
import MainItems from "../components/MainItems/MainItems";
import { productData } from "../constance";
import useGetProductItems from "../hooks/useGetProductItems";

export default function MainPage() {
  const testGetData = useGetProductItems();

  if (testGetData.isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <MainBanner />
      <MainTextBanner />
      <Category />
      <ListTitle>TRENDING ITEMS</ListTitle>
      <MainItems productList={testGetData.data.data} mode={"main"} />
    </Container>
  );
}

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 4px;
  word-spacing: 4px;
`;
