import React from "react";
import styled from "styled-components";

export default function Loading() {
  return <Container>Loading ...</Container>;
}

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  width: 100%;
  height: 100%;
`;
