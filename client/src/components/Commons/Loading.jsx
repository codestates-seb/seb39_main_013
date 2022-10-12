/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import styled from "styled-components";

export default function Loading() {
  return (
    <Container>
      <BounceLoader color="#c4ecec" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
