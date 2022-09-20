import React from "react";
import styled from "styled-components";
import LoginForm from "../components/Login/LoginForm";
import SubBanner from "../components/SubBanner/Subbanner";
import bannerImg from "../assets/images/shop_sub_banner.png";

export default function LoginPage() {
  return (
    <Container>
      <SubBanner imgUrl={bannerImg} />
      <LoginForm />
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
