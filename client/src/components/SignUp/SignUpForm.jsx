import React from "react";
import styled from "styled-components";
import SignInput from "../Commons/SignInput";
import SignButton from "../Commons/SignButton";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  return (
    <Container>
      <SignInput label={"Email"} text={"Input your Email"} type={"email"} />
      <SignInput
        label={"Password"}
        text={"Input Password for Signup"}
        type={"password"}
      />
      <SignInput
        label={"Check Password"}
        text={"Check Password"}
        type={"password"}
      />
      <PolicyChackWrapper>
        <input type={"checkbox"} id={"policy"} />
        <label htmlFor="policy">Private policy</label>
      </PolicyChackWrapper>
      <MiddleWrapper>
        <SignButton mode={"login"}>SignUp</SignButton>
        <span>
          이미 계정이 있으십니까? <Link to={"/login"}>Login</Link>
        </span>
      </MiddleWrapper>
    </Container>
  );
}

const Container = styled.form`
  width: 620px;
  padding: 64px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const PolicyChackWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 1rem;
    height: 1rem;
  }

  label {
    font-size: 14px;
  }
`;

const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 14px;
  }
`;
