import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <h1>LOGO</h1>
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

export default Header;
