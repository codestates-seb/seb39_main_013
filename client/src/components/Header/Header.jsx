import React from "react";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Container>
      <SearchBar />
      <LogoBox>
        <h1>LOGO</h1>
      </LogoBox>
      <HeaderMenu />
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
`;

const LogoBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export default Header;
