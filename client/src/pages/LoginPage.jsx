/* eslint-disable no-undef */
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import LoginForm from "../components/Login/LoginForm";
import SubBanner from "../components/SubBanner/Subbanner";

export default function LoginPage() {
  return (
    <Container>
      <SubBanner
        imgUrl={`${process.env.PUBLIC_URL}/assets/images/shop_sub_banner.png`}
      />
      <LoginForm />
      <ToastContainer position="top-center" draggable />
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
