/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const Header = () => {
  const userInfo = useSelector((state) => state.user);
  console.log("inner header :", userInfo);

  return (
    <Container>
      <SearchBar />
      <LogoBox>
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo_demo02.svg`}
            alt="logo"
          />
        </Link>
      </LogoBox>
      {userInfo.isLogin ? (
        <HeaderMenu login={true} />
      ) : (
        <HeaderMenu login={false} />
      )}
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 999;
`;

const LogoBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 120px;
  }
`;

export default Header;
