import React from "react";
import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";

const HeaderMenu = () => {
  return (
    <Container>
      <Wrapper>
        <a href="#">
          <BsCart2 />
        </a>
        <a href="#">
          <AiOutlineLogin />
        </a>
      </Wrapper>
    </Container>
  );
};

const Container = styled.nav`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;

  svg {
    width: 24px;
    height: 24px;
  }

  a {
    color: #2d2d2d;
  }
`;

export default HeaderMenu;
