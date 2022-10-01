import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MyFavoriteList from "../components/MyPage/MyFavoriteList";
import MyPageIconBox from "../components/MyPage/MyPageIconBox";
import ProfileCard from "../components/MyPage/ProfileCard";

export default function MyPage() {
  return (
    <Container>
      <ContentsWrapper>
        <ProfileCard />
        <MyPageIconBox />
        <Routes>
          <Route index element={<MyFavoriteList />} />
          <Route path="favorite" element={<MyFavoriteList />} />
        </Routes>
      </ContentsWrapper>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  justify-content: center;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  max-width: 1060px;
`;
