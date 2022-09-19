import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  return (
    <Container>
      <input />
      <BiSearch />
    </Container>
  );
}

const Container = styled.div`
  width: 250px;
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