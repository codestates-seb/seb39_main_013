import React from "react";
import styled from "styled-components";
import LoginForm from "../components/Login/LoginForm";

export default function LoginPage() {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  justify-content: center;
`;
