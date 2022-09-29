/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignButton from "../Commons/SignButton";
import SignInput from "../Commons/SignInput";
import { useDispatch } from "react-redux";
import useLoginMutation from "../../hooks/useLoginMutation";
import useOauthMutaion from "../../hooks/useOauthMutaion";
import useAuthorize from "../../hooks/useAuthorize";
import { authorizeToken } from "../../api";
import Loading from "../Commons/Loading";

export default function LoginForm() {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const loginAction = useLoginMutation(loginValue);
  const oauthLoginAction = useOauthMutaion();
  const authToken = useAuthorize();

  const inputChangeHandler = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  const loginActionHandler = (e) => {
    e.preventDefault();
    loginAction.mutate();
  };

  const oauthActionHandler = (e) => {
    e.preventDefault();
    oauthLoginAction.refetch();
  };

  const tokenAuth = (e) => {
    e.preventDefault();
    authToken.refetch();
  };

  if (loginAction.isSuccess) {
    navigate("/");
  }

  if (loginAction.isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <SignInput
        name={"email"}
        label={"Email"}
        text={"Input your Email"}
        type={"email"}
        changeHandler={inputChangeHandler}
      />
      <SignInput
        name={"password"}
        label={"Password"}
        text={"Input your Password"}
        type={"password"}
        changeHandler={inputChangeHandler}
      />
      <MiddleWrapper>
        <SignButton mode={"login"} onClickHandler={loginActionHandler}>
          Login
        </SignButton>
        <SignMenuWrapper>
          <div>
            <Link to="/signup">회원가입</Link>
          </div>
          <div>
            <a href="#">아이디 찾기</a>
          </div>
          <div>
            <a href="#">비밀번호 찾기</a>
          </div>
        </SignMenuWrapper>
      </MiddleWrapper>
      {/* <GoogleLogin clientId={googleClientID} onSuccess={googleAuthOnSuccess} /> */}
      <SignButton onClickHandler={oauthActionHandler}>
        Login with Google
      </SignButton>
      <SignButton onClickHandler={tokenAuth}>Authrize</SignButton>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  max-width: 620px;
  padding: 64px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const SignMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      font-size: 14px;
      color: black;
    }
  }
`;
