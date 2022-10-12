/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignButton from "../Commons/SignButton";
import SignInput from "../Commons/SignInput";
import useLoginMutation from "../../hooks/useLoginMutation";
import { emailValidation, passwordValidation } from "../../utils/validation";

export default function LoginForm() {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const navigate = useNavigate();
  const loginAction = useLoginMutation(loginValue);

  useEffect(() => {
    if (loginAction.isSuccess) {
      navigate("/");
    }
  }, [loginAction.isSuccess]);

  useEffect(() => {
    let valid = true;
    for (let i in loginValue) {
      if (!loginValue[i]) {
        valid = false;
        break;
      }
    }
    if (!valid || !inputValid) {
      setIsValid(false);
    } else if (valid && inputValid) {
      setIsValid(true);
    }
  }, [loginValue, inputValid]);

  const inputChangeHandler = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  const loginActionHandler = (e) => {
    e.preventDefault();
    loginAction.mutate();
  };

  return (
    <Container>
      <SignInput
        name={"email"}
        label={"Email"}
        text={"Input your Email"}
        type={"email"}
        changeHandler={inputChangeHandler}
        onBlur={emailValidation}
        value={loginValue.email}
        errorMassage={"이메일 형식을 지켜주세요."}
        setValid={setInputValid}
      />
      <SignInput
        name={"password"}
        label={"Password"}
        text={"Input your Password"}
        type={"password"}
        changeHandler={inputChangeHandler}
        onBlur={passwordValidation}
        value={loginValue.password}
        errorMassage={"비밀번호는 6자리 이상을 입력해주세요."}
        setValid={setInputValid}
      />
      <MiddleWrapper>
        <SignButton
          mode={"login"}
          onClickHandler={loginActionHandler}
          disabled={isValid}
        >
          Login
        </SignButton>
        <SignMenuWrapper>
          <div>
            이미 계정이 있으신가요?
            <Link to="/signup">회원가입</Link>
          </div>
        </SignMenuWrapper>
      </MiddleWrapper>
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
    gap: 8px;

    a {
      font-size: 1rem;
      color: black;
      color: #2d7df4;
    }
  }
`;
