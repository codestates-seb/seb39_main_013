import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import EditProfile from "../components/MyPage/EditProfile";
import MyFavoriteList from "../components/MyPage/MyFavoriteList";
import MyOrderList from "../components/MyPage/MyOrderList";
import MyPageIconBox from "../components/MyPage/MyPageIconBox";
import MyPaymentList from "../components/MyPage/MyPaymentList";
import ProfileCard from "../components/MyPage/ProfileCard";

export default function MyPage() {
  const userInfo = useSelector((state) => state.user);
  return (
    <Container>
      <ContentsWrapper>
        <ProfileCard info={userInfo} />
        <MyPageIconBox />
        <Routes>
          <Route index element={<MyFavoriteList />} />
          <Route path="favorite" element={<MyFavoriteList />} />
          <Route path="orders" element={<MyOrderList />} />
          <Route path="payment" element={<MyPaymentList />} />
          <Route path="edit" element={<EditProfile />} />
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
