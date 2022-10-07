/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { tablet } from "../../utils/styleTheme";

const Header = () => {
  const userInfo = useSelector((state) => state.user);
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
        <HeaderMenu login={true} info={userInfo} />
      ) : (
        <HeaderMenu login={false} info={userInfo} />
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
  z-index: 200;

  @media ${tablet} {
    padding: 0 20px;
  }
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
