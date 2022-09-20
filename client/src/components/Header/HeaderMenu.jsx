import React from "react";
import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/cart">
          <BsCart2 />
        </Link>
        <Link to="/login">
          <AiOutlineLogin />
        </Link>
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
