/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignButton from "../Commons/SignButton";
import SignInput from "../Commons/SignInput";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducer/userSlice";

export default function LoginForm() {
  const googleClientID = process.env.REACT_APP_CLIENT_ID;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = () => {
      gapi.auth2.init({
        clientId: googleClientID,
        scope: "email",
        ux_mode: "popup",
      });
    };
    gapi.load("client:auth2", initAuth);
  }, []);

  const googleAuthOnSuccess = (res) => {
    console.log(res);
    dispatch(setUser({ name: res.wt.Ad, email: res.wt.cu }));
    navigate("/");
  };

  return (
    <Container>
      <SignInput label={"Email"} text={"Input your Email"} type={"email"} />
      <SignInput
        label={"Password"}
        text={"Input your Password"}
        type={"password"}
      />
      <MiddleWrapper>
        <SignButton mode={"login"}>Login</SignButton>
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
      <GoogleLogin clientId={googleClientID} onSuccess={googleAuthOnSuccess} />
      {/* <SignButton>Login with Google</SignButton> */}
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
