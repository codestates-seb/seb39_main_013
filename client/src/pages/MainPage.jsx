/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Category from "../components/Category/Category";
import MainBanner from "../components/Main/MainBanner";
import MainTextBanner from "../components/Main/MainTextBanner";
import MainItems from "../components/MainItems/MainItems";

export default function MainPage() {
  const urlParams = {
    page: 0,
    pageSize: 20,
    majorClass: "신발",
  };

  return (
    <Container>
      <MainBanner />
      <MainTextBanner />
      <Category />
      <ListTitle>TRENDING ITEMS</ListTitle>
      <MainItems params={urlParams} mode={"main"} />
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
