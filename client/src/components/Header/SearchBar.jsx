import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  return (
    <Container>
      <Wrapper>
        <input />
        <BiSearch />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 250px;
  border-bottom: 1px solid #565656;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    padding: 0 4px;
    line-height: 1.5rem;
    border: none;
    width: 100%;
    outline: none;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
