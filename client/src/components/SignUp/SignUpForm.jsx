/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import SignInput from "../Commons/SignInput";
import SignButton from "../Commons/SignButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useSignUpMutation from "../../hooks/useSignUpMutation";

export default function SignUpForm() {
  const [signUpValue, setSignUpValue] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
  });

  const signUpAction = useSignUpMutation(signUpValue);

  const inputChangeHandler = (e) => {
    setSignUpValue({ ...signUpValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signUpAction.mutate();
  };

  if (signUpAction.isSuccess) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <Container>
      <SignInput
        label={"Email"}
        text={"Input your Email"}
        type={"email"}
        name={"email"}
        changeHandler={inputChangeHandler}
      />
      <SignInput
        label={"Name"}
        text={"Input your Name"}
        type={"text"}
        name={"name"}
        changeHandler={inputChangeHandler}
      />
      <SignInput
        label={"Phone"}
        text={"Input your PhoneNumber"}
        type={"text"}
        name={"phone"}
        changeHandler={inputChangeHandler}
      />
      <SignInput
        label={"Password"}
        text={"Input Password for Signup"}
        type={"password"}
        name={"password"}
        changeHandler={inputChangeHandler}
      />
      <SignInput
        label={"Check Password"}
        text={"Check Password"}
        type={"password"}
        name={"passwordCheck"}
        changeHandler={inputChangeHandler}
      />
      <PolicyChackWrapper>
        <input type={"checkbox"} id={"policy"} />
        <label htmlFor="policy">Private policy</label>
      </PolicyChackWrapper>
      <MiddleWrapper>
        <SignButton mode={"login"} onClickHandler={submitHandler}>
          SignUp
        </SignButton>
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
