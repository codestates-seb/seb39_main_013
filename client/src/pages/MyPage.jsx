import React from "react";
import styled from "styled-components";
import AddressForm from "../components/Address/AddressForm";
import MyPageIconBox from "../components/MyPage/MyPageIconBox";
import ProfileCard from "../components/MyPage/ProfileCard";

export default function MyPage() {
  return (
    <Container>
      <ContentsWrapper>
        <ProfileCard />
        <MyPageIconBox />
        <AddressForm />
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
