import React from "react";
import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";

const HeaderMenu = () => {
  return (
    <Container>
      <a href="#">
        <BsCart2 />
      </a>
      <a href="#">
        <AiOutlineLogin />
      </a>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export default HeaderMenu;
