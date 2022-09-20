import React from "react";
import styled from "styled-components";
import SignUpForm from "../components/SignUp/SignUpForm";

export default function SignUpPage() {
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  justify-content: center;
`;
